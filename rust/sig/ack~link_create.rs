/// Matches `<ack>`. Server-initiated; nothing sends it.
pub fn parse_voip_link_create_response_link_create_ack(n: &Node) -> Option<VoipLinkCreateResponseLinkCreateAck>