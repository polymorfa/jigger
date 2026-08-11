/// Matches `<chatstate>`. Server-initiated; nothing sends it.
pub fn parse_chatstate_paused_mixin(n: &Node) -> Option<ChatstatePausedMixin>