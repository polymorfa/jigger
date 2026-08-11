/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_client_log_log_request(n: &Node) -> Option<ClientLogLogRequest>