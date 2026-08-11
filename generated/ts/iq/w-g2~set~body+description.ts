/** <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsSetDescription(to: string, to: string, id?: string, prev?: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'description', attrs: { id: id, prev: prev, delete: 'true' } },
    ] }
}