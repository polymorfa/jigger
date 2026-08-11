/** <iq type="set" xmlns="fbid:devices">. Replies with one of: Success, Error. */
export function buildDevicesNotify(jid: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'fbid:devices', type: 'set' }, content: [
      { tag: 'users', attrs: {  } },
    ] }
}