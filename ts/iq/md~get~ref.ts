/** <iq type="get" xmlns="md">. Replies with one of: Success. */
export function buildMdGetRef(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'md', type: 'get' }, content: [
      { tag: 'ref', attrs: {  } },
    ] }
}