pub const WAM_PNH_REQUEST_REVEAL_ACTION: u32 = 3808;

#[derive(Debug, Default)]
pub struct PnhRequestRevealActionEvent {
    /// field 1, wire `pnh_action`
    pub pnh_action: Option<PNHACTIONTYPE>,
    /// field 2, wire `pnh_chat_party`
    pub pnh_chat_party: Option<PNHMESSAGECHATPARTY>,
    /// field 3, wire `pnh_chat_type`
    pub pnh_chat_type: Option<PNHCHATTYPETYPE>,
    /// field 4, wire `pnh_entry_point`
    pub pnh_entry_point: Option<PNHENTRYPOINTTYPE>,
    /// field 5, wire `thread_id`
    pub thread_id: Option<String>,
}