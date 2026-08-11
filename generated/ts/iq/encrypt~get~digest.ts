/** <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError. */
export function buildPreKeysFetchDigest(): BinaryNode {
  return { tag: 'iq', attrs: { type: 'get', xmlns: 'encrypt', to: 's.whatsapp.net' }, content: [
      { tag: 'digest', attrs: {  } },
    ] }
}