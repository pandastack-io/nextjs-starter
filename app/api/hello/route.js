export async function GET() {
  return Response.json({ message: 'Hello from PandaStack!', timestamp: new Date().toISOString() })
}
