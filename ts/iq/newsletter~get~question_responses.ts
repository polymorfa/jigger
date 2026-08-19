/** <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError. */
export function buildNewslettersGetNewsletterResponses(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'newsletter', type: 'get' } }
}