/** <iq type="set" xmlns="fbid:devices">. Replies with one of: Success, Error. */
export function buildDevicesRemove(id: number): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'fbid:devices', type: 'set' }, content: [
      { tag: 'remove', attrs: { id: id } },
    ] }
}