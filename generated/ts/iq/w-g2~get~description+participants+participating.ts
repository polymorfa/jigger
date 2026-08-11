/** <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsGetParticipatingGroups(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'get' }, content: [
      { tag: 'participating', attrs: {  } },
    ] }
}