/** <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError. */
export function buildPreKeysFetchKeyBundles(contextJid?: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'get', xmlns: 'encrypt', to: 's.whatsapp.net' }, content: [
      { tag: 'key', attrs: { pqsupport: 'true', context_jid: contextJid } },
    ] }
}