pub const WAM_WEBC_MEDIA_ANALYZED: u32 = 912;

#[derive(Debug, Default)]
pub struct WebcMediaAnalyzedEvent {
    /// field 1, wire `webc_media_supported`
    pub webc_media_supported: Option<bool>,
    /// field 2, wire `webc_media_extensions`
    pub webc_media_extensions: Option<String>,
    /// field 3, wire `webc_media_analyze_t`
    pub webc_media_analyze_t: Option<String>,
}