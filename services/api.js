import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY;

export async function getLimitedCats(
	size,
	mime_types,
	has_breeds,
	include_breed,
	limit
) {
	const url = `${API_BASE_URL}/images/search?size=${size}&mime_types=${mime_types}&has_breeds=${has_breeds}&include_breed=${include_breed}&limit=${limit}`;
	try {
		const response = await fetch(url, {
			headers: { 'x-api-key': API_KEY }
		});
		const data = await response.json();
		if (response.ok) {
			return { status: response.status, data: data };
		} else {
			return NextResponse.json(
				{ error: 'Failed to fetch getLimitedCats', status: response.status },
				{ status: response.status }
			);
		}
	} catch (e) {
		console.error(e);
		return NextResponse.json(
			{ error: 'Internal server error', details: e.message },
			{ status: 500 }
		);
	}
}
