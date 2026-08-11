/** <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, Error. */
export function buildBizLinkingGetAccountNonce(smaxId: number, from?: string, scope: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'fb:thrift_iq', smax_id: smaxId, from: from, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'identifier', attrs: { scope: scope } }, /* optional */
    ] }
}