/** <iq type="set" xmlns="md">. Replies with one of: Success. */
export function buildMdSetPasskeyPrologue(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'md', type: 'set' }, content: [
      { tag: 'passkey_prologue', attrs: {  } },
    ] }
}