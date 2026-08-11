/** <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, Forbidden, Error. */
export function buildBizLinkingGetLinkedAccounts(smaxId: number, from?: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'fb:thrift_iq', smax_id: smaxId, from: from, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'linked_accounts', attrs: {  } },
    ] }
}