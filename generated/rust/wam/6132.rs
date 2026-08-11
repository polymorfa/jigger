pub const WAM_WEBC_CHAT_CREATE: u32 = 6132;

#[derive(Debug, Default)]
pub struct WebcChatCreateEvent {
    /// field 1, wire `creation_method`
    pub creation_method: Option<WEBCCHATCREATECREATIONMETHOD>,
    /// field 2, wire `no_created`
    pub no_created: Option<i64>,
}