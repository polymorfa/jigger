/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_groups_join_notification_request(n: &Node) -> Option<GroupsJoinNotificationRequest>