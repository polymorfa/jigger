/** <iq type="set" xmlns="tos">. */
export function buildUserNoticeSet(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'tos', type: 'set' }, content: [
      { tag: 'notice', attrs: {  } },
    ] }
}