/** <iq type="get" xmlns="bot">. Replies with one of: SuccessV2, SuccessV3, Error. */
export function buildBotBotList(v?: string, bhash?: string, jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'bot', type: 'get' }, content: [
      { tag: 'bot', attrs: { v: v, bhash: bhash } },
    ] }
}