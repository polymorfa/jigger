pub const WAM_MM_SIGNAL_REALTIME_WEB: u32 = 7860;

#[derive(Debug, Default)]
pub struct MmSignalRealtimeWebEvent {
    /// field 1, wire `mm_carousel_card_index`
    pub mm_carousel_card_index: Option<i64>,
    /// field 2, wire `mm_cta_button_index`
    pub mm_cta_button_index: Option<i64>,
    /// field 3, wire `mm_signal_data`
    pub mm_signal_data: Option<String>,
    /// field 4, wire `mm_signal_type`
    pub mm_signal_type: Option<MMSIGNALTYPE>,
}