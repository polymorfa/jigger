/** <iq type="get" xmlns="waffle">. Replies with one of: Success, Error. */
export function buildWaffleForceDeleteState(smaxId: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'waffle', smax_id: smaxId, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'timestamp', attrs: {  } },
      { tag: 'only_if_suspended', attrs: {  } }, /* optional */
    ] }
}