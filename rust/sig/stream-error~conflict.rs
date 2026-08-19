/// Matches `<stream:error>`. Server-initiated; nothing sends it.
pub fn parse_stream_error_conflict_request(n: &Node) -> Option<StreamErrorConflictRequest>