/** Matches `<stream:error>`. Server-initiated; nothing sends it. */
export function parseStreamErrorBadMacRequest(n: BinaryNode): StreamErrorBadMacRequest | null