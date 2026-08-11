/** <iq type="set" xmlns="w:g2">. Replies with one of: SuccessPromote, SuccessDemote, ClientError, ServerError. */
export function buildGroupsPromoteDemote(to: string, to: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'promote', attrs: {  } }, /* optional */
      { tag: 'demote', attrs: {  } }, /* optional */
    ] }
}