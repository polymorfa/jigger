pub const WAM_GIF_SEARCH_CANCELLED: u32 = 1126;

#[derive(Debug, Default)]
pub struct GifSearchCancelledEvent {
    /// field 1, wire `gif_search_provider`
    pub gif_search_provider: Option<GIFSEARCHPROVIDER>,
}