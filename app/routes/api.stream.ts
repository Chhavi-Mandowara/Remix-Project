export async function loader() {
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    async start(controller) {
      const markdown = `
# You did it!

### You’ve successfully created a project with Vite + Vue 3 (ported to Remix!). What's next?

This text is being streamed chunk-by-chunk from the server using a ReadableStream!
      `.trim();
      
      const words = markdown.split(" ");
      
      for (const word of words) {
        controller.enqueue(encoder.encode(word + " "));
        // Sleep for 100ms between words to simulate streaming chunks
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
