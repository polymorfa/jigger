pub const WAM_MD_BAD_DEVICE_SENT_MESSAGE: u32 = 2176;

#[derive(Debug, Default)]
pub struct MdBadDeviceSentMessageEvent {
    /// field 1, wire `peer_type`
    pub peer_type: Option<DEVICETYPE>,
    /// field 2, wire `dsm_error`
    pub dsm_error: Option<DSMERROR>,
    /// field 3, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 4, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 5, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 6, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 7, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
    /// field 9, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 10, wire `sender_platform`
    pub sender_platform: Option<PLATFORMTYPE>,
}