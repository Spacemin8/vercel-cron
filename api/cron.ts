import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // This endpoint will be called by Vercel's cron job
  console.log('Cron job running at:', new Date().toISOString());
  
  // You can add your cron job logic here
  // For example: cleanup tasks, data updates, etc.
  
  response.status(200).json({
    success: true,
    lastRun: new Date().toISOString(),
  });
}