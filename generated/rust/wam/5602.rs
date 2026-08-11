pub const WAM_WA_FS_SINGLE_EMOJI_MESSAGE_DAILY: u32 = 5602;

#[derive(Debug, Default)]
pub struct WaFsSingleEmojiMessageDailyEvent {
    /// field 1, wire `animated_emoji_enabled`
    pub animated_emoji_enabled: Option<bool>,
    /// field 2, wire `animated_emoji_receive_cnt`
    pub animated_emoji_receive_cnt: Option<i64>,
    /// field 3, wire `animated_emoji_send_cnt`
    pub animated_emoji_send_cnt: Option<i64>,
    /// field 4, wire `emoji_click_cnt`
    pub emoji_click_cnt: Option<i64>,
    /// field 5, wire `emoji_reply_count`
    pub emoji_reply_count: Option<i64>,
    /// field 6, wire `pause_animation_cnt`
    pub pause_animation_cnt: Option<i64>,
    /// field 7, wire `replay_animation_cnt`
    pub replay_animation_cnt: Option<i64>,
    /// field 8, wire `single_emoji_receive_cnt`
    pub single_emoji_receive_cnt: Option<i64>,
    /// field 9, wire `single_emoji_send_cnt`
    pub single_emoji_send_cnt: Option<i64>,
}