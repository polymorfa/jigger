/** <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError. */
export function buildNewslettersGetNewsletterStatusUpdates(to: string, to: string, count: number, since?: number): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'newsletter', type: 'get' }, content: [
      { tag: 'status_updates', attrs: { count: count, since: since } },
    ] }
}