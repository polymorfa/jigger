pub const WAM_WEB_CONTACT_LIST_START_NEW_CHAT: u32 = 4560;

#[derive(Debug, Default)]
pub struct WebContactListStartNewChatEvent {
    /// field 1, wire `web_contact_list_start_new_chat_search`
    pub web_contact_list_start_new_chat_search: Option<bool>,
    /// field 2, wire `web_contact_list_start_new_chat_type`
    pub web_contact_list_start_new_chat_type: Option<WEBCONTACTLISTSTARTNEWCHATTYPE>,
}