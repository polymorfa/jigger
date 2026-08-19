/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_newsletters_live_updates_notification_request(n: &Node) -> Option<NewslettersLiveUpdatesNotificationRequest>