/// Matches `<message>`. Server-initiated; nothing sends it.
pub fn parse_message_deliver_auth_mixin(n: &Node) -> Option<MessageDeliverAuthMixin>