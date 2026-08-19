pub const WAM_AR_INTERSTITIAL_SCREEN_IMPRESSION: u32 = 7890;

#[derive(Debug, Default)]
pub struct ArInterstitialScreenImpressionEvent {
    /// field 1, wire `account_after_read_duration`
    pub account_after_read_duration: Option<i64>,
    /// field 2, wire `after_read_screen_entry_point`
    pub after_read_screen_entry_point: Option<AFTERREADSCREENENTRYPOINTTYPE>,
    /// field 3, wire `nux_version`
    pub nux_version: Option<i64>,
}