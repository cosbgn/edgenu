import { rewrite } from '@vercel/edge';
 
export default function middleware(request) {
  	const url = new URL(request.url);
	console.log("RUNNING MID: ", request.url, url.pathname)
	if (url.pathname.startsWith('/foo')) {
		const final_url = new URL('/api/backend', request.url)
		console.log(`Returning Rewrite: ${JSON.stringify(final_url)}`)
		return rewrite(final_url)

		// I've also tried this which works but returns [Object Object]
		// return new Response(resp, {
		// 	status: 200,
		// 	headers: { 'content-type': 'text/html' }
		// })
	}

}