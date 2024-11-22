import { json } from '@sveltejs/kit';

// GET endpoint
export async function GET() {
    const data = {
        message: 'Hello, world!'
    };
    return json(data);
}

// POST endpoint
export async function POST({ request }) {
    const body = await request.json();
    const response = {
        message: 'Data received',
        data: body
    };
    return json(response);
}