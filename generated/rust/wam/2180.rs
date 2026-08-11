pub const WAM_MD_DEVICE_SYNC_ACK: u32 = 2180;

#[derive(Debug, Default)]
pub struct MdDeviceSyncAckEvent {
    /// field 1, wire `chat_type`
    pub chat_type: Option<MESSAGECHATTYPE>,
    /// field 2, wire `revoke`
    pub revoke: Option<bool>,
    /// field 3, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 4, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 5, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 6, wire `server_addressing_mode`
    pub server_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 7, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 8, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
}