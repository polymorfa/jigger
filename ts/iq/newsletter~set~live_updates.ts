/** <iq type="set" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError. */
export function buildNewslettersSubscribeToLiveUpdates(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'newsletter', type: 'set' }, content: [
      { tag: 'live_updates', attrs: {  } },
    ] }
}