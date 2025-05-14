import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/lib/supabase';


/**
 * Handles GET requests to the /api/dashboard endpoint, returning the
 * investor_summary table record for the user with id
 * f6284349-0e47-4f84-8714-06e09fb56af0.
 *
 * Ideally we would take the current user id and query based on that, but
 * we have no authentication and only one db entry.
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ideally we would take current user id and query based on that, but we have no authentication and only one db entry
  if (req.method === 'GET') {
    // AI ! query 
    const { data, error } = await supabase
      .from('investor_summary')
      .select("*, investments(*)")
      .eq("id", "f6284349-0e47-4f84-8714-06e09fb56af0")
      .single();
    // gets a single object instead of array

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['GET'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
