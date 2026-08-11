/** <iq type="set" xmlns="spam">. Replies with one of: Success, Error. */
export function buildSpamStatusReportV2(to: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'set', xmlns: 'spam', to } }
}