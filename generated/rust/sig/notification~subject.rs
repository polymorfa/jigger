/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_groups_subject_change_notification_request(n: &Node) -> Option<GroupsSubjectChangeNotificationRequest>