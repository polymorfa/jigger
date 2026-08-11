pub const WAM_WEBC_LINK_PREVIEW_RESPONSE_HANDLE: u32 = 3860;

#[derive(Debug, Default)]
pub struct WebcLinkPreviewResponseHandleEvent {
    /// field 2, wire `is_preview_success`
    pub is_preview_success: Option<bool>,
    /// field 3, wire `preview_session_id`
    pub preview_session_id: Option<String>,
    /// field 4, wire `preview_duration_ms`
    pub preview_duration_ms: Option<i64>,
    /// field 5, wire `did_respond_hq_preview`
    pub did_respond_hq_preview: Option<bool>,
}