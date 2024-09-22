import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { prompt } = await request.json();

        console.log("prompt" + prompt);

        function generateRandomNumber() {
            return Math.floor(Math.random() * 100000000) + 1;
        }

        const randomSeed = generateRandomNumber();
        const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${randomSeed}&width=1024&height=1024&nologo=True`;

        const response = await fetch(imageURL);

        console.log("response" + response, JSON.stringify(response));

        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        return NextResponse.json({ success: true, url: imageURL });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
