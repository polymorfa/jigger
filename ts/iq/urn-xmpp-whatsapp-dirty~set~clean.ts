/** <iq type="set" xmlns="urn:xmpp:whatsapp:dirty">. Replies with one of: Success, Error. */
export function buildDirtyBitsClean(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'urn:xmpp:whatsapp:dirty', type: 'set' }, content: [
      { tag: 'clean', attrs: {  } },
    ] }
}