/** <iq type="set" xmlns="w:g2">. Replies with one of: GroupJoinRequestSuccess, Success, ClientError, ServerError. */
export function buildGroupsJoinLinkedGroup(to: string, to: string, type?: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'join_linked_group', attrs: { type: type, jid: jid } },
    ] }
}