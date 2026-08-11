/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_groups_remove_notification_request(n: &Node) -> Option<GroupsRemoveNotificationRequest>