pub const WAM_PTT_DAILY: u32 = 2938;

#[derive(Debug, Default)]
pub struct PttDailyEvent {
    /// field 1, wire `ptt_record_individual`
    pub ptt_record_individual: Option<i64>,
    /// field 2, wire `ptt_record_group`
    pub ptt_record_group: Option<i64>,
    /// field 3, wire `ptt_record_broadcast`
    pub ptt_record_broadcast: Option<i64>,
    /// field 4, wire `ptt_send_individual`
    pub ptt_send_individual: Option<i64>,
    /// field 5, wire `ptt_send_group`
    pub ptt_send_group: Option<i64>,
    /// field 6, wire `ptt_send_broadcast`
    pub ptt_send_broadcast: Option<i64>,
    /// field 7, wire `ptt_cancel_individual`
    pub ptt_cancel_individual: Option<i64>,
    /// field 8, wire `ptt_cancel_group`
    pub ptt_cancel_group: Option<i64>,
    /// field 9, wire `ptt_cancel_broadcast`
    pub ptt_cancel_broadcast: Option<i64>,
    /// field 10, wire `ptt_lock_individual`
    pub ptt_lock_individual: Option<i64>,
    /// field 11, wire `ptt_lock_group`
    pub ptt_lock_group: Option<i64>,
    /// field 12, wire `ptt_lock_broadcast`
    pub ptt_lock_broadcast: Option<i64>,
    /// field 13, wire `ptt_draft_review_individual`
    pub ptt_draft_review_individual: Option<i64>,
    /// field 14, wire `ptt_draft_review_group`
    pub ptt_draft_review_group: Option<i64>,
    /// field 15, wire `ptt_draft_review_broadcast`
    pub ptt_draft_review_broadcast: Option<i64>,
    /// field 16, wire `ptt_playback_individual`
    pub ptt_playback_individual: Option<i64>,
    /// field 17, wire `ptt_playback_group`
    pub ptt_playback_group: Option<i64>,
    /// field 18, wire `ptt_playback_broadcast`
    pub ptt_playback_broadcast: Option<i64>,
    /// field 19, wire `ptt_fastplayback_individual`
    pub ptt_fastplayback_individual: Option<i64>,
    /// field 20, wire `ptt_fastplayback_group`
    pub ptt_fastplayback_group: Option<i64>,
    /// field 21, wire `ptt_fastplayback_broadcast`
    pub ptt_fastplayback_broadcast: Option<i64>,
    /// field 22, wire `ptt_paused_record_broadcast`
    pub ptt_paused_record_broadcast: Option<i64>,
    /// field 23, wire `ptt_paused_record_group`
    pub ptt_paused_record_group: Option<i64>,
    /// field 24, wire `ptt_paused_record_individual`
    pub ptt_paused_record_individual: Option<i64>,
    /// field 25, wire `ptt_stop_tap_broadcast`
    pub ptt_stop_tap_broadcast: Option<i64>,
    /// field 26, wire `ptt_stop_tap_group`
    pub ptt_stop_tap_group: Option<i64>,
    /// field 27, wire `ptt_stop_tap_individual`
    pub ptt_stop_tap_individual: Option<i64>,
    /// field 29, wire `ptt_out_of_chat_broadcast`
    pub ptt_out_of_chat_broadcast: Option<i64>,
    /// field 30, wire `ptt_out_of_chat_group`
    pub ptt_out_of_chat_group: Option<i64>,
    /// field 31, wire `ptt_out_of_chat_individual`
    pub ptt_out_of_chat_individual: Option<i64>,
    /// field 32, wire `ptt_cancel_newsletter`
    pub ptt_cancel_newsletter: Option<i64>,
    /// field 33, wire `ptt_draft_review_newsletter`
    pub ptt_draft_review_newsletter: Option<i64>,
    /// field 34, wire `ptt_fastplayback_newsletter`
    pub ptt_fastplayback_newsletter: Option<i64>,
    /// field 35, wire `ptt_lock_newsletter`
    pub ptt_lock_newsletter: Option<i64>,
    /// field 36, wire `ptt_out_of_chat_newsletter`
    pub ptt_out_of_chat_newsletter: Option<i64>,
    /// field 37, wire `ptt_paused_record_newsletter`
    pub ptt_paused_record_newsletter: Option<i64>,
    /// field 38, wire `ptt_playback_newsletter`
    pub ptt_playback_newsletter: Option<i64>,
    /// field 39, wire `ptt_record_newsletter`
    pub ptt_record_newsletter: Option<i64>,
    /// field 40, wire `ptt_send_newsletter`
    pub ptt_send_newsletter: Option<i64>,
    /// field 41, wire `ptt_stop_tap_newsletter`
    pub ptt_stop_tap_newsletter: Option<i64>,
    /// field 42, wire `ptt_cancel_interop`
    pub ptt_cancel_interop: Option<i64>,
    /// field 43, wire `ptt_draft_review_interop`
    pub ptt_draft_review_interop: Option<i64>,
    /// field 44, wire `ptt_fastplayback_interop`
    pub ptt_fastplayback_interop: Option<i64>,
    /// field 45, wire `ptt_lock_interop`
    pub ptt_lock_interop: Option<i64>,
    /// field 46, wire `ptt_out_of_chat_interop`
    pub ptt_out_of_chat_interop: Option<i64>,
    /// field 47, wire `ptt_paused_record_interop`
    pub ptt_paused_record_interop: Option<i64>,
    /// field 48, wire `ptt_playback_interop`
    pub ptt_playback_interop: Option<i64>,
    /// field 49, wire `ptt_record_interop`
    pub ptt_record_interop: Option<i64>,
    /// field 50, wire `ptt_send_interop`
    pub ptt_send_interop: Option<i64>,
    /// field 51, wire `ptt_stop_tap_interop`
    pub ptt_stop_tap_interop: Option<i64>,
}