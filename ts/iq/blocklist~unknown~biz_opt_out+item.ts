/** <iq type="unknown" xmlns="blocklist">. Replies with one of: SuccessWithMatch, SuccessWithMismatch, MigratedSuccessWithMismatch, CAPISuccessWithMismatch, InvalidRequest, ServerError. */
export function buildBlocklistsUpdateBlockList(to: string): BinaryNode {
  return { tag: 'iq', attrs: { type: 'unknown', xmlns: 'blocklist', to } }
}