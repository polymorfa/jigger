/** <iq type="get" xmlns="waffle">. Replies with one of: Success, Error. */
export function buildWaffleRefreshAccessTokens(smaxId: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'waffle', smax_id: smaxId, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'encryption_metadata', attrs: {  } },
      { tag: 'timestamp', attrs: {  } },
      { tag: 'fbid', attrs: {  } },
    ] }
}