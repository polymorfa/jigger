/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_md_primary_hello_notify_companion_request(n: &Node) -> Option<MdPrimaryHelloNotifyCompanionRequest>