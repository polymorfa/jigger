/** Matches `<notification>`. Server-initiated; nothing sends it. */
export function parseGroupsJoinNotificationRequest(n: BinaryNode): GroupsJoinNotificationRequest | null