import { NowRequest, NowResponse } from '@vercel/node';

export default async (req: NowRequest, res: NowResponse) => {
    // Your cron job logic here
    res.status(200).send('Cron job executed successfully!');
};