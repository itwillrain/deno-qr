import { Color, figlet, log, qrcode, serve } from './deps.ts';
import { isUrl } from './validater/mod.ts';

async function handler(req: Request): Promise<Response> {
	const url = new URL(req.url);
	const targetUrl = url.searchParams.get('url') || '';

	if (!targetUrl || !isUrl(targetUrl)) {
		const body = JSON.stringify({ message: 'Not Found' });
		return new Response(body, {
			status: 404,
			headers: {
				'content-type': 'applocation/json; charset=utf-8',
			},
		});
	}

	const qrCode = await qrcode(targetUrl);

	return new Response(
		`<html lang="ja">
      <head>
      </head>
      <body>
        <h1>QRCode</h1>
				<div>
					<img src=${qrCode}>
				</div>	
      </body>
    </html>`,
		{
			headers: {
				'content-type': 'text/html; charset=utf-8',
			},
		},
	);
}

const signature = await figlet.text('Hello Deno!', 'slant');
log.info(Color.brightGreen(signature));
log.info('🦕 Listening on http://localhost:8000');

serve(handler);
