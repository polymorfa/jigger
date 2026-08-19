/// Matches `<notification>`. Server-initiated; nothing sends it.
pub fn parse_pre_keys_notification_contact_idchanged_request(n: &Node) -> Option<PreKeysNotificationContactIDChangedRequest>