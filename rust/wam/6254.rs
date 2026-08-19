pub const WAM_PS_CHANNELS_SNAPL_EVENT: u32 = 6254;

#[derive(Debug, Default)]
pub struct PsChannelsSnaplEventEvent {
    /// field 1, wire `video_event_json`
    pub video_event_json: Option<String>,
    /// field 2, wire `app_id`
    pub app_id: Option<i64>,
}