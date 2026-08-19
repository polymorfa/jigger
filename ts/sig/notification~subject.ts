/** Matches `<notification>`. Server-initiated; nothing sends it. */
export function parseGroupsSubjectChangeNotificationRequest(n: BinaryNode): GroupsSubjectChangeNotificationRequest | null