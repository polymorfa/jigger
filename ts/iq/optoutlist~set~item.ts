/** <iq type="set" xmlns="optoutlist">. Replies with one of: SuccessWithMatch, SuccessWithMismatch, InvalidRequest, ServerError. */
export function buildBlocklistsUpdateOptOutList(jid: string, category: string, action: string, dhash?: string, reason?: string, entryPoint?: string, signupId?: string, duration?: number): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'optoutlist', type: 'set' }, content: [
      { tag: 'item', attrs: { jid: jid, category: category, action: action, dhash: dhash, reason: reason, entry_point: entryPoint, signup_id: signupId, duration: duration } },
    ] }
}