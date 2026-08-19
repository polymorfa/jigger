/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_ab_props_refresh_request(n: &Node) -> Option<AbPropsRefreshRequest>