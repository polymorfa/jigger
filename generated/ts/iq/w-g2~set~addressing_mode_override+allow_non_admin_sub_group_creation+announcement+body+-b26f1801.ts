/** <iq type="set" xmlns="w:g2">. Replies with one of: Success, GroupAlreadyExists, ClientError, ServerError. */
export function buildGroupsCreate(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' } }
}