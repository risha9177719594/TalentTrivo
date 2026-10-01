import type { Plugin, ViteDevServer, PreviewServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import { handleCreateLead } from './leadController';
import { localLeadRepository } from './repositories/localLeadRepository';

const parseJsonBody = (req: IncomingMessage, limit = 100 * 1024): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    let raw = '';
    let size = 0;

    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        req.destroy();
        reject(new Error('PAYLOAD_TOO_LARGE'));
        return;
      }
      raw += chunk;
    });

    req.on('end', () => {
      if (!raw.trim()) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(new Error('INVALID_JSON'));
      }
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
};

const apiMiddleware = async (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => {
  const url = req.url ? req.url.split('?')[0] : '';

  if (url === '/api/leads' && req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json');

    try {
      const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
      const body = await parseJsonBody(req);
      const result = await handleCreateLead(body, localLeadRepository, clientIp);

      res.statusCode = result.status;
      res.end(JSON.stringify(result.body));
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'PAYLOAD_TOO_LARGE') {
        res.statusCode = 413;
        res.end(JSON.stringify({ success: false, error: 'Payload size exceeds 100KB limit.' }));
        return;
      }
      if (err instanceof Error && err.message === 'INVALID_JSON') {
        res.statusCode = 400;
        res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload.' }));
        return;
      }

      res.statusCode = 500;
      res.end(JSON.stringify({ success: false, error: 'Internal server error.' }));
    }
    return;
  }

  // Health check endpoint
  if (url === '/api/health' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({
      status: 'ok',
      runtime: 'local-vite',
      database: 'sqlite-sql.js',
      timestamp: new Date().toISOString()
    }));
    return;
  }

  next();
};

export const talentTrivoApiPlugin = (): Plugin => {
  return {
    name: 'talenttrivo-api',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(apiMiddleware);
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use(apiMiddleware);
    }
  };
};
