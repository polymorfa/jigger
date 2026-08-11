pub const WAM_PRIVACY_HIGHLIGHT_DAILY: u32 = 3522;

#[derive(Debug, Default)]
pub struct PrivacyHighlightDailyEvent {
    /// field 1, wire `dialog_appear_count`
    pub dialog_appear_count: Option<i64>,
    /// field 2, wire `dialog_select_count`
    pub dialog_select_count: Option<i64>,
    /// field 3, wire `narrative_appear_count`
    pub narrative_appear_count: Option<i64>,
    /// field 4, wire `privacy_highlight_category`
    pub privacy_highlight_category: Option<PRIVACYHIGHLIGHTCATEGORYENUM>,
    /// field 5, wire `privacy_highlight_surface`
    pub privacy_highlight_surface: Option<PRIVACYHIGHLIGHTSURFACEENUM>,
}