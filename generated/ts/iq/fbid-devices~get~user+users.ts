/** <iq type="get" xmlns="fbid:devices">. Replies with one of: Success, Error. */
export function buildDevicesFetch(): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'fbid:devices', type: 'get' }, content: [
      { tag: 'users', attrs: {  } },
    ] }
}