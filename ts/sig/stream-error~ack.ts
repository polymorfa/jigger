/** Matches `<stream:error>`. Server-initiated; nothing sends it. */
export function parseStreamErrorAckKickRequest(n: BinaryNode): StreamErrorAckKickRequest | null