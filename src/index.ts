export interface Env {
	DB: D1Database;
	THOTHER_IO_BUCKET: R2Bucket;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname === "/api/hello") {
			return new Response(JSON.stringify({ message: "Hello from thother-io Worker!" }), {
				headers: { "content-type": "application/json" },
			});
		}

		return new Response(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>thother.io</title>
					<style>
						body { font-family: system-ui; padding: 2rem; background: #f0f4f8; }
						.card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
						h1 { color: #2563eb; }
					</style>
				</head>
				<body>
					<div class="card">
						<h1>thother.io</h1>
						<p>Welcome to thother.io. This is running on a <strong>Cloudflare Worker</strong>.</p>
						<hr />
						<p>Status: 🟢 Operational</p>
						<p><a href="/api/hello">Check API</a></p>
					</div>
				</body>
			</html>
		`, {
			headers: { "content-type": "text/html" },
		});
	},
};
