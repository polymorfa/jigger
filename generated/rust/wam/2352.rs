pub const WAM_WEBC_MEDIA_ERROR_UNKNOWN_DETAILS: u32 = 2352;

#[derive(Debug, Default)]
pub struct WebcMediaErrorUnknownDetailsEvent {
    /// field 1, wire `media_id`
    pub media_id: Option<i64>,
    /// field 2, wire `webc_media_operation`
    pub webc_media_operation: Option<WEBCMEDIAOPERATIONCODE>,
    /// field 3, wire `webc_media_error_name`
    pub webc_media_error_name: Option<String>,
    /// field 4, wire `webc_media_error_message`
    pub webc_media_error_message: Option<String>,
}