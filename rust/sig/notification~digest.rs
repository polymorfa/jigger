/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_pre_keys_notification_digest_request(n: &Node) -> Option<PreKeysNotificationDigestRequest>