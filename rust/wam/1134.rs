pub const WAM_GIF_SEARCH_SESSION_STARTED: u32 = 1134;

#[derive(Debug, Default)]
pub struct GifSearchSessionStartedEvent {
    /// field 1, wire `gif_search_provider`
    pub gif_search_provider: Option<GIFSEARCHPROVIDER>,
}