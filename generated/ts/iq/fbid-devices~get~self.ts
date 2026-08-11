/** <iq type="get" xmlns="fbid:devices">. Replies with one of: Success, Error. */
export function buildDevicesFetchSelf(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'fbid:devices', type: 'get' }, content: [
      { tag: 'self', attrs: {  } },
    ] }
}