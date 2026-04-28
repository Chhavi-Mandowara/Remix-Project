import React, { Suspense } from "react";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

export async function loader() {
  // Simulate a slow network request to test streaming
  const slowData = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Streaming Test Completed Successfully!"), 3000);
  });
  
  return defer({
    slowData,
    fastData: "This data was loaded immediately on the server.",
  });
}

export default function StreamingTest() {
  const { slowData, fastData } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Remix Streaming Test
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Hosted on Contentstack Launch
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 space-y-6">
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Fast Data</h3>
            <p className="text-gray-700">{fastData}</p>
          </div>

          <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-lg font-medium text-blue-900 mb-2">Deferred Data (Streamed)</h3>
            <Suspense fallback={
              <div className="flex items-center space-x-3 text-blue-600">
                <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Loading streamed content...</span>
              </div>
            }>
              <Await resolve={slowData}>
                {(resolvedData) => (
                  <p className="text-blue-800 font-medium">{resolvedData}</p>
                )}
              </Await>
            </Suspense>
          </div>
          
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              You did it! You've successfully created a streaming page. What's next?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
