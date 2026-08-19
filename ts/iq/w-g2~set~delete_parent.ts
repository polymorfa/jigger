/** <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsDeleteParentGroup(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'delete_parent', attrs: {  } },
    ] }
}