/// Matches `<chatstate>`. Server-initiated; nothing sends it.
pub fn parse_chatstate_composing_mixin(n: &Node) -> Option<ChatstateComposingMixin>