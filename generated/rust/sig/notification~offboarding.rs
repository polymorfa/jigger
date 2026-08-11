/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_coexistence_offboarding_notification_request(n: &Node) -> Option<CoexistenceOffboardingNotificationRequest>