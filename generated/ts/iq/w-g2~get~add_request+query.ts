/** <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsGetGroupInfo(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'get' } }
}