/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_md_refresh_code_notify_companion_request(n: &Node) -> Option<MdRefreshCodeNotifyCompanionRequest>