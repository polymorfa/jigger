pub const WAM_THREAD_INTERACTION_DATA_NOTIFICATION: u32 = 6412;

#[derive(Debug, Default)]
pub struct ThreadInteractionDataNotificationEvent {
    /// field 1, wire `group_size_bucket`
    pub group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 2, wire `group_type_client`
    pub group_type_client: Option<GROUPTYPECLIENT>,
    /// field 3, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 4, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 6, wire `total_link_reshare_message_notif_shown`
    pub total_link_reshare_message_notif_shown: Option<i64>,
    /// field 7, wire `total_link_reshare_message_notif_shown_fb`
    pub total_link_reshare_message_notif_shown_fb: Option<i64>,
    /// field 8, wire `total_link_reshare_message_notif_shown_ig`
    pub total_link_reshare_message_notif_shown_ig: Option<i64>,
    /// field 9, wire `total_link_reshare_message_notif_tap_to_open`
    pub total_link_reshare_message_notif_tap_to_open: Option<i64>,
    /// field 10, wire `total_link_reshare_message_notif_tap_to_open_fb`
    pub total_link_reshare_message_notif_tap_to_open_fb: Option<i64>,
    /// field 11, wire `total_link_reshare_message_notif_tap_to_open_ig`
    pub total_link_reshare_message_notif_tap_to_open_ig: Option<i64>,
    /// field 12, wire `total_message_reminder_notif_shown`
    pub total_message_reminder_notif_shown: Option<i64>,
    /// field 13, wire `total_message_reminder_notif_tap_to_open`
    pub total_message_reminder_notif_tap_to_open: Option<i64>,
    /// field 14, wire `total_notif_mark_as_read`
    pub total_notif_mark_as_read: Option<i64>,
    /// field 15, wire `total_notif_missed_call_voip_callback`
    pub total_notif_missed_call_voip_callback: Option<i64>,
    /// field 16, wire `total_notif_missed_call_voip_message`
    pub total_notif_missed_call_voip_message: Option<i64>,
    /// field 17, wire `total_notif_others`
    pub total_notif_others: Option<i64>,
    /// field 18, wire `total_notif_reply`
    pub total_notif_reply: Option<i64>,
    /// field 19, wire `total_notif_rtc_voip_accept`
    pub total_notif_rtc_voip_accept: Option<i64>,
    /// field 20, wire `total_notif_rtc_voip_decline`
    pub total_notif_rtc_voip_decline: Option<i64>,
    /// field 21, wire `total_notif_show_preview`
    pub total_notif_show_preview: Option<i64>,
    /// field 22, wire `total_notif_shown`
    pub total_notif_shown: Option<i64>,
    /// field 23, wire `total_notif_tap_to_open`
    pub total_notif_tap_to_open: Option<i64>,
    /// field 24, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 25, wire `thread_id_by_lid`
    pub thread_id_by_lid: Option<String>,
    /// field 26, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
}