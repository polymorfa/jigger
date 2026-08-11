/** <iq type="unknown" xmlns="encrypt">. Replies with one of: Success, ValidationError, RequestError, ServerError. */
export function buildPreKeysRotateSigned(to: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'unknown', xmlns: 'encrypt', to } }
}