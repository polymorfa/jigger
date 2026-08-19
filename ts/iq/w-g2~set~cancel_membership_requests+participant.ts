/** <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError. */
export function buildGroupsCancelGroupMembershipRequests(to: string, to: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'cancel_membership_requests', attrs: {  } },
    ] }
}