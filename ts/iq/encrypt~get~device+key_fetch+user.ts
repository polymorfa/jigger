/** <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError. */
export function buildPreKeysFetchMissingPreKeys(contextJid?: string, jid: string, id: number): BinaryNode {
  return { tag: 'iq', attrs: { type: 'get', xmlns: 'encrypt', to: 's.whatsapp.net' }, content: [
      { tag: 'key_fetch', attrs: { pqsupport: 'true', context_jid: contextJid } },
    ] }
}