/** <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError. */
export function buildNewslettersGetNewsletterMessageUpdates(to: string, to: string, count: number, since?: number): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'newsletter', type: 'get' }, content: [
      { tag: 'message_updates', attrs: { count: count, since: since } },
    ] }
}