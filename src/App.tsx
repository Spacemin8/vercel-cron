import React from 'react';
import useSWR from 'swr';
import { Clock } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR('/api/hello', fetcher, {
    refreshInterval: 5000 // Refresh every 5 seconds
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">Vercel API Demo</h1>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <div className="animate-pulse bg-gray-200 h-20 rounded-lg" />
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Failed to load API response
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-600 mb-2">API Response:</p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}

          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
            <h2 className="font-semibold text-indigo-900 mb-2">About this demo</h2>
            <p className="text-indigo-700 text-sm">
              This page fetches data from a Vercel API endpoint every 5 seconds.
              There's also a cron job running hourly at /api/cron.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;