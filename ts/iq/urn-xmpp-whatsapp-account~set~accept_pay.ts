/** <iq type="set" xmlns="urn:xmpp:whatsapp:account">. Replies with one of: Success, Error. */
export function buildAccountSetPaymentsTOSv3(tosVersion: number): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'urn:xmpp:whatsapp:account', type: 'set' }, content: [
      { tag: 'accept_pay', attrs: { version: '3', tos_version: tosVersion } },
    ] }
}