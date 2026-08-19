pub const WAM_GIF_SEARCH_RESULT_TAPPED: u32 = 1122;

#[derive(Debug, Default)]
pub struct GifSearchResultTappedEvent {
    /// field 1, wire `gif_search_provider`
    pub gif_search_provider: Option<GIFSEARCHPROVIDER>,
    /// field 2, wire `rank`
    pub rank: Option<i64>,
}