pub const WAM_MESSAGE_SECRET_ERRORS: u32 = 3686;

#[derive(Debug, Default)]
pub struct MessageSecretErrorsEvent {
    /// field 1, wire `message_secret_allowed_list`
    pub message_secret_allowed_list: Option<MESSAGESECRETALLOWEDTYPE>,
    /// field 2, wire `message_secret_error`
    pub message_secret_error: Option<MESSAGESECRETERRORTYPE>,
    /// field 3, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
}