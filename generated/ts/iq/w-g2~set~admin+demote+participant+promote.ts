/** <iq type="set" xmlns="w:g2">. Replies with one of: SuccessMultiAdmin, ClientError, ServerError. */
export function buildGroupsPromoteDemoteAdmin(to: string, to: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'admin', attrs: {  } },
    ] }
}