/** <iq type="get" xmlns="privatestats">. Replies with one of: Success, ErrorNoRetry, ErrorRetry. */
export function buildPrivatestatsSignCredential(): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'privatestats', type: 'get', to: 's.whatsapp.net' }, content: [
      { tag: 'sign_credential', attrs: { version: '2' } },
    ] }
}