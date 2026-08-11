/// Matches `<stream:error>`. Server-initiated; nothing sends it.
pub fn parse_stream_error_xmlnot_well_formed_request(n: &Node) -> Option<StreamErrorXMLNotWellFormedRequest>