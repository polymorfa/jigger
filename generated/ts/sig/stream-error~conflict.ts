/** Matches `<stream:error>`. Server-initiated; nothing sends it. */
export function parseStreamErrorConflictRequest(n: BinaryNode): StreamErrorConflictRequest | null