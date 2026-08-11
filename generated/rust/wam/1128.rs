pub const WAM_GIF_SEARCH_NO_RESULTS: u32 = 1128;

#[derive(Debug, Default)]
pub struct GifSearchNoResultsEvent {
    /// field 1, wire `gif_search_provider`
    pub gif_search_provider: Option<GIFSEARCHPROVIDER>,
    /// field 2, wire `language_code`
    pub language_code: Option<String>,
    /// field 3, wire `input_language_code`
    pub input_language_code: Option<String>,
}