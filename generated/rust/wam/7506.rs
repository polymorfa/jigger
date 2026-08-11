pub const WAM_WEBC_WEBTP_PDF_VIEWER: u32 = 7506;

#[derive(Debug, Default)]
pub struct WebcWebtpPdfViewerEvent {
    /// field 1, wire `webtp_error_code`
    pub webtp_error_code: Option<String>,
    /// field 2, wire `webtp_error_message`
    pub webtp_error_message: Option<String>,
    /// field 3, wire `webtp_error_stack`
    pub webtp_error_stack: Option<String>,
    /// field 4, wire `webtp_error_type`
    pub webtp_error_type: Option<String>,
    /// field 5, wire `webtp_event`
    pub webtp_event: Option<WEBTPEVENTTYPE>,
    /// field 6, wire `webtp_file_size`
    pub webtp_file_size: Option<String>,
    /// field 7, wire `webtp_sdk_version`
    pub webtp_sdk_version: Option<String>,
    /// field 8, wire `webtp_session_id`
    pub webtp_session_id: Option<String>,
    /// field 9, wire `webtp_source`
    pub webtp_source: Option<WEBTPSOURCETYPE>,
    /// field 10, wire `webtp_telemetry_data`
    pub webtp_telemetry_data: Option<String>,
}