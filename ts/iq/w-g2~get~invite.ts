/** <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsGetInviteGroupInfo(to: string, to: string, code: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'get' }, content: [
      { tag: 'invite', attrs: { code: code } },
    ] }
}