/// Matches `<ack>`. Server-initiated; nothing sends it.
pub fn parse_message_publish_ack_rcat_mixin(n: &Node) -> Option<MessagePublishAckRcatMixin>