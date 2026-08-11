/** <iq type="set" xmlns="fb:thrift_iq">. Replies with one of: Success, Error. */
export function buildBizCtwaNativeAdUploadAdMedia(smaxId: number, from?: string, id: string, type: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'fb:thrift_iq', smax_id: smaxId, from: from, to: 's.whatsapp.net', type: 'set' }, content: [
      { tag: 'media', attrs: { id: id, type: type } }, /* optional */
      { tag: 'media_list', attrs: { id: id, type: type } }, /* repeated */
    ] }
}