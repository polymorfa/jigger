/** <iq type="get" xmlns="optoutlist">. Replies with one of: SuccessWithMismatch, SuccessWithMatch, InvalidRequest, InternalServerError. */
export function buildBlocklistsGetOptOutList(category?: string, dhash: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'optoutlist', type: 'get', category: category }, content: [
      { tag: 'item', attrs: { dhash: dhash } }, /* optional */
    ] }
}