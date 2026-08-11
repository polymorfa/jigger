/** Matches `<stream:error>`. Server-initiated; nothing sends it. */
export function parseStreamErrorXMLNotWellFormedRequest(n: BinaryNode): StreamErrorXMLNotWellFormedRequest | null