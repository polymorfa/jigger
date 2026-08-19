/** <iq type="get" xmlns="waffle">. Replies with one of: Success, Error. */
export function buildWaffleGenerateWAEntACUser(smaxId: number, id: number, version: string, lg: string, lc: string): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'waffle', smax_id: smaxId, to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'encryption_metadata', attrs: {  } },
      { tag: 'timestamp', attrs: {  } },
      { tag: 'disclosure', attrs: { id: id, version: version, lg: lg, lc: lc } },
    ] }
}