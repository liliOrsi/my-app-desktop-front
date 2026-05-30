import { NextRequest, NextResponse } from 'next/server';

const PYTHON_URL = process.env.PYTHON_API_INTERNAL_URL ?? 'http://localhost:8000';

async function proxy(req: NextRequest, params: { path: string[] }) {
  const path = params.path.join('/');
  const url = new URL(req.url);
  const target = `${PYTHON_URL}/${path}${url.search}`;

  const contentType = req.headers.get('content-type') ?? 'application/json';
  const authorization = req.headers.get('authorization');

  const headers: Record<string, string> = { 'content-type': contentType };
  if (authorization) headers['authorization'] = authorization;

  let body: BodyInit | undefined;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    // Preserve binary body for multipart uploads; text for JSON
    body = contentType.includes('multipart/form-data')
      ? await req.arrayBuffer()
      : await req.text();
  }

  const upstream = await fetch(target, { method: req.method, headers, body });

  const data = await upstream.text();
  return new NextResponse(data, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('content-type') ?? 'application/json' },
  });
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, await params);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, await params);
}
