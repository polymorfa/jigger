/** <iq type="get" xmlns="w:comms:chat">. Replies with one of: Success, ServerError. */
export function buildPsaChatBlockGet(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'w:comms:chat', type: 'get' }, content: [
      { tag: 'query', attrs: {  } },
    ] }
}