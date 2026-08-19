/** <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError. */
export function buildNewslettersMyAddOns(limit: number, jid?: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'newsletter', type: 'get' }, content: [
      { tag: 'my_addons', attrs: { limit: limit, jid: jid } },
    ] }
}