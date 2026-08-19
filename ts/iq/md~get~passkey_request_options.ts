/** <iq type="get" xmlns="md">. Replies with one of: Success, Error. */
export function buildMdGetPasskeyRequestOptions(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'md', type: 'get' }, content: [
      { tag: 'passkey_request_options', attrs: {  } },
    ] }
}