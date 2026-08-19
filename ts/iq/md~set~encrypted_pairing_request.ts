/** <iq type="set" xmlns="md">. Replies with one of: Success. */
export function buildMdSetEncryptedPairing(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'md', type: 'set' }, content: [
      { tag: 'encrypted_pairing_request', attrs: {  } },
    ] }
}