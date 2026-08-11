/** Matches `<stream:error>`. Server-initiated; nothing sends it. */
export function parseStreamErrorPingKickRequest(n: BinaryNode): StreamErrorPingKickRequest | null