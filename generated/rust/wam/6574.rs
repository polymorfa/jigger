pub const WAM_CONTACT_SEARCH_EXPERIENCE: u32 = 6574;

#[derive(Debug, Default)]
pub struct ContactSearchExperienceEvent {
    /// field 1, wire `is_username_search`
    pub is_username_search: Option<bool>,
    /// field 2, wire `search_action_name`
    pub search_action_name: Option<SEARCHACTIONNAME>,
    /// field 4, wire `search_starts_with_at`
    pub search_starts_with_at: Option<bool>,
    /// field 5, wire `contact_search_entrypoint`
    pub contact_search_entrypoint: Option<CONTACTSEARCHENTRYPOINT>,
}