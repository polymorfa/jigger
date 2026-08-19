/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_multiwayd_multiway_notification_request(n: &Node) -> Option<MultiwaydMultiwayNotificationRequest>