/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_coexistence_onboarding_status_notification_request(n: &Node) -> Option<CoexistenceOnboardingStatusNotificationRequest>