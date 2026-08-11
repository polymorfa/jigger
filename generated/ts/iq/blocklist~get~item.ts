/** <iq type="get" xmlns="blocklist">. Replies with one of: SuccessWithMismatch, MigratedSuccessWithMismatch, ForceMigratedSuccessWithMismatch, CAPISuccessWithMismatch, SuccessWithMatch, InvalidRequest, InternalServerError. */
export function buildBlocklistsGetBlockList(dhash: string): BinaryNode {
  return { tag: 'iq', attrs: { to: 's.whatsapp.net', xmlns: 'blocklist', type: 'get' }, content: [
      { tag: 'item', attrs: { dhash: dhash } }, /* optional */
    ] }
}