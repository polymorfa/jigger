/** <iq type="set" xmlns="tos">. */
export function buildUserNoticeSetResult(id: number, result: number): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'tos', type: 'set' }, content: [
      { tag: 'trackable', attrs: { id: id, result: result } },
    ] }
}