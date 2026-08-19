/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_waffle_wfnotification_request(n: &Node) -> Option<WaffleWFNotificationRequest>