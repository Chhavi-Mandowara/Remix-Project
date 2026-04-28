import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function StreamingTest() {
  const [streamedContent, setStreamedContent] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState(false);

  const startStreaming = async () => {
    setStreamedContent("");
    setIsStreaming(true);

    try {
      const response = await fetch("/api/stream");
      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setStreamedContent((prev) => prev + chunk);
        }
      }
    } catch (error) {
      console.error("Streaming failed:", error);
      setStreamedContent((prev) => prev + "\n\n**Error streaming data.**");
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl text-center">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Remix Chunk Streaming Test
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Hosted on Contentstack Launch
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 space-y-6">
          
          <div className="text-center">
            <button
              onClick={startStreaming}
              disabled={isStreaming}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isStreaming ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isStreaming ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Streaming...
                </>
              ) : (
                "Click to Start Streaming Data"
              )}
            </button>
          </div>

          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50 min-h-[200px] prose prose-blue max-w-none">
            {streamedContent ? (
              <ReactMarkdown>{streamedContent}</ReactMarkdown>
            ) : (
              <p className="text-gray-400 italic text-center mt-12">
                Click the button above to see chunk-by-chunk streaming...
              </p>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
