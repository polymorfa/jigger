/** <iq type="set" xmlns="spam">. Replies with one of: Success, Error. */
export function buildSpamNewsletterReport(jid: string, spamFlow: string, subject: string, from: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'set', to: 's.whatsapp.net', xmlns: 'spam' }, content: [
      { tag: 'spam_list', attrs: { jid: jid, spam_flow: spamFlow, subject: subject } },
    ] }
}