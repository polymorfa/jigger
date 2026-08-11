/** <iq type="set" xmlns="w:comms:chat">. Replies with one of: Success, ServerError. */
export function buildPsaChatBlockSet(action: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'w:comms:chat', type: 'set' }, content: [
      { tag: 'blocking', attrs: { action: action } },
    ] }
}