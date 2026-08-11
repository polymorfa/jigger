pub const WAM_DEEP_LINK_CLICK: u32 = 1156;

#[derive(Debug, Default)]
pub struct DeepLinkClickEvent {
    /// field 1, wire `deep_link_has_text`
    pub deep_link_has_text: Option<bool>,
    /// field 2, wire `deep_link_has_phone_number`
    pub deep_link_has_phone_number: Option<bool>,
    /// field 3, wire `deep_link_session_id`
    pub deep_link_session_id: Option<String>,
    /// field 4, wire `deep_link_has_username`
    pub deep_link_has_username: Option<bool>,
    /// field 5, wire `deep_link_has_username_pin`
    pub deep_link_has_username_pin: Option<bool>,
    /// field 6, wire `deep_link_require_pin_entry`
    pub deep_link_require_pin_entry: Option<bool>,
}