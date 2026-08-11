pub const WAM_GIF_FROM_PROVIDER_SENT: u32 = 1124;

#[derive(Debug, Default)]
pub struct GifFromProviderSentEvent {
    /// field 1, wire `gif_search_provider`
    pub gif_search_provider: Option<GIFSEARCHPROVIDER>,
}