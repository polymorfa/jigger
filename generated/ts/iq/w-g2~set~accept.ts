/** <iq type="set" xmlns="w:g2">. Replies with one of: GroupJoinRequestSuccess, Success, ClientError, ServerError. */
export function buildGroupsAcceptGroupAdd(to: string, to: string, code: string, expiration: number, admin: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'accept', attrs: { code: code, expiration: expiration, admin: admin } },
    ] }
}