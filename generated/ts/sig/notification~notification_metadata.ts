/** Matches `<notification>`. Server-initiated; nothing sends it. */
export function parseWaffleWFNotificationRequest(n: BinaryNode): WaffleWFNotificationRequest | null