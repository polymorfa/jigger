pub const WAM_WEBC_LINK_PREVIEW_DISPLAY: u32 = 3864;

#[derive(Debug, Default)]
pub struct WebcLinkPreviewDisplayEvent {
    /// field 1, wire `webc_display_status`
    pub webc_display_status: Option<WEBCDISPLAYSTATUSTYPE>,
    /// field 2, wire `did_fallback_non_hq`
    pub did_fallback_non_hq: Option<bool>,
    /// field 3, wire `did_request_hq`
    pub did_request_hq: Option<bool>,
    /// field 4, wire `did_respond_hq_preview`
    pub did_respond_hq_preview: Option<bool>,
}