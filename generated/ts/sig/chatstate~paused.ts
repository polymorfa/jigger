/** Matches `<chatstate>`. Server-initiated; nothing sends it. */
export function parseChatstatePausedMixin(n: BinaryNode): ChatstatePausedMixin | null