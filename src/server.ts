import { Color, figlet, log, qrcode, serve } from './deps.ts';

function handler(req: Request): Response {
	const url = new URL(req.url);
	const targetUrl = url.searchParams.get('url') || '';

	log.info(url);

	return new Response('Hello World!', {
		headers: { 'content-type': 'text/plain' },
	});
}

const PORT = parseInt(Deno.env.get('PORT') ?? '8000');

log.info(`🦕  Starting server on port ${PORT}....`);
serve(handler, {
	port: PORT,
});
