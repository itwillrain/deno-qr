import { Color, figlet, log, qrcode, serve } from './deps.ts';

function handler(req: Request): Response {
	const url = new URL(req.url);
	const targetUrl = url.searchParams.get('url') || '';

	// const qrCode = await qrcode(targetUrl);

	return new Response(
		`<html lang="ja">
      <head>
      </head>
      <body>
        <h1>QRCode</h1>
				<div>
					<img src=${targetUrl}>
					
					<p>${targetUrl}</p>
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
