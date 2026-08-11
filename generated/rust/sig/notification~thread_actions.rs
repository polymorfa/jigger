/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_message_request_thread_notification_request(n: &Node) -> Option<MessageRequestThreadNotificationRequest>