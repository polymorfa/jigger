/// Matches `<stream:error>`. Server-initiated; nothing sends it.
pub fn parse_stream_error_ping_kick_request(n: &Node) -> Option<StreamErrorPingKickRequest>