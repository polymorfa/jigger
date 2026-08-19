pub const WAM_WEBC_MEDIA_LOAD: u32 = 1202;

#[derive(Debug, Default)]
pub struct WebcMediaLoadEvent {
    /// field 1, wire `webc_media_load_t`
    pub webc_media_load_t: Option<String>,
    /// field 2, wire `webc_media_load_result`
    pub webc_media_load_result: Option<WEBCMEDIALOADRESULTCODE>,
}