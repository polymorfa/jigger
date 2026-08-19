/** <iq type="set" xmlns="w:biz:msg_feedback">. Replies with one of: Success, InvalidRequest, ServerError. */
export function buildBizMsgUserFeedbackUpdatePreference(action: string, jid: string, feedback?: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'w:biz:msg_feedback', to: 's.whatsapp.net', type: 'set' }, content: [
      { tag: 'user_feedback', attrs: { action: action, jid: jid, feedback: feedback } },
    ] }
}