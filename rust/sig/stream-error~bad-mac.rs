/// Matches `<stream:error>`. Server-initiated; nothing sends it.
pub fn parse_stream_error_bad_mac_request(n: &Node) -> Option<StreamErrorBadMacRequest>