/** <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsUnlinkGroups(to: string, to: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'unlink', attrs: { unlink_type: 'sub_group' } },
    ] }
}