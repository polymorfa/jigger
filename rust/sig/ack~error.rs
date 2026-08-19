/// Matches `<ack>`. Server-initiated; nothing sends it.
pub fn parse_voip_link_query_response_link_query_nack(n: &Node) -> Option<VoipLinkQueryResponseLinkQueryNack>