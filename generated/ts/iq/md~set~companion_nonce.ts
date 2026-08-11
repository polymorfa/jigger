/** <iq type="set" xmlns="md">. Replies with one of: Success. */
export function buildMdSetCompanionNonce(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'md', type: 'set' }, content: [
      { tag: 'companion_nonce', attrs: {  } },
    ] }
}