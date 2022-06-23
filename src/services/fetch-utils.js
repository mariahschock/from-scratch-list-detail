import { client, checkError } from './client';

export async function getFish(from = 0, to = 10) {
  const resp = await client.from('fish').select().range(from, to);

  return checkError(resp);
}