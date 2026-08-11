/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_groups_delete_notification_request(n: &Node) -> Option<GroupsDeleteNotificationRequest>