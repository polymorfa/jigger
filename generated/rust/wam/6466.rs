pub const WAM_THREAD_INTERACTION_DATA_CORE_CONSUMER: u32 = 6466;

#[derive(Debug, Default)]
pub struct ThreadInteractionDataCoreConsumerEvent {
    /// field 1, wire `audio_messages_received`
    pub audio_messages_received: Option<i64>,
    /// field 2, wire `audio_messages_sent`
    pub audio_messages_sent: Option<i64>,
    /// field 3, wire `broadcast_msgs_received`
    pub broadcast_msgs_received: Option<i64>,
    /// field 4, wire `broadcast_msgs_sent`
    pub broadcast_msgs_sent: Option<i64>,
    /// field 6, wire `chat_ephemerality_duration`
    pub chat_ephemerality_duration: Option<i64>,
    /// field 7, wire `chat_muted`
    pub chat_muted: Option<CHATMUTEDTYPE>,
    /// field 8, wire `chat_overflow_clicks`
    pub chat_overflow_clicks: Option<i64>,
    /// field 9, wire `chat_type_ind`
    pub chat_type_ind: Option<CHATTYPE>,
    /// field 10, wire `comments_received`
    pub comments_received: Option<i64>,
    /// field 13, wire `document_messages_received`
    pub document_messages_received: Option<i64>,
    /// field 14, wire `document_messages_sent`
    pub document_messages_sent: Option<i64>,
    /// field 15, wire `edited_msgs_sent`
    pub edited_msgs_sent: Option<i64>,
    /// field 16, wire `ephemeral_messages_received`
    pub ephemeral_messages_received: Option<i64>,
    /// field 17, wire `ephemeral_messages_sent`
    pub ephemeral_messages_sent: Option<i64>,
    /// field 18, wire `ephemeral_messages_unread_expired`
    pub ephemeral_messages_unread_expired: Option<i64>,
    /// field 21, wire `event_creation_messages_received`
    pub event_creation_messages_received: Option<i64>,
    /// field 22, wire `event_creation_messages_sent`
    pub event_creation_messages_sent: Option<i64>,
    /// field 23, wire `event_response_messages_received`
    pub event_response_messages_received: Option<i64>,
    /// field 24, wire `event_response_messages_sent`
    pub event_response_messages_sent: Option<i64>,
    /// field 25, wire `forward_audio_messages_received`
    pub forward_audio_messages_received: Option<i64>,
    /// field 26, wire `forward_audio_messages_sent`
    pub forward_audio_messages_sent: Option<i64>,
    /// field 27, wire `forward_document_messages_received`
    pub forward_document_messages_received: Option<i64>,
    /// field 28, wire `forward_document_messages_sent`
    pub forward_document_messages_sent: Option<i64>,
    /// field 29, wire `forward_gif_messages_received`
    pub forward_gif_messages_received: Option<i64>,
    /// field 30, wire `forward_gif_messages_sent`
    pub forward_gif_messages_sent: Option<i64>,
    /// field 31, wire `forward_messages_received`
    pub forward_messages_received: Option<i64>,
    /// field 32, wire `forward_messages_sent`
    pub forward_messages_sent: Option<i64>,
    /// field 33, wire `forward_photo_messages_received`
    pub forward_photo_messages_received: Option<i64>,
    /// field 34, wire `forward_photo_messages_sent`
    pub forward_photo_messages_sent: Option<i64>,
    /// field 35, wire `forward_sticker_messages_received`
    pub forward_sticker_messages_received: Option<i64>,
    /// field 36, wire `forward_sticker_messages_sent`
    pub forward_sticker_messages_sent: Option<i64>,
    /// field 37, wire `forward_text_messages_received`
    pub forward_text_messages_received: Option<i64>,
    /// field 38, wire `forward_text_messages_sent`
    pub forward_text_messages_sent: Option<i64>,
    /// field 39, wire `forward_url_messages_received`
    pub forward_url_messages_received: Option<i64>,
    /// field 40, wire `forward_url_messages_sent`
    pub forward_url_messages_sent: Option<i64>,
    /// field 41, wire `forward_video_messages_received`
    pub forward_video_messages_received: Option<i64>,
    /// field 42, wire `forward_video_messages_sent`
    pub forward_video_messages_sent: Option<i64>,
    /// field 43, wire `ga_status`
    pub ga_status: Option<GASTATUS>,
    /// field 44, wire `gif_messages_received`
    pub gif_messages_received: Option<i64>,
    /// field 45, wire `gif_messages_sent`
    pub gif_messages_sent: Option<i64>,
    /// field 47, wire `group_membership_replies`
    pub group_membership_replies: Option<i64>,
    /// field 48, wire `group_private_replies`
    pub group_private_replies: Option<i64>,
    /// field 49, wire `group_size`
    pub group_size: Option<i64>,
    /// field 50, wire `has_username`
    pub has_username: Option<bool>,
    /// field 51, wire `has_username_pin`
    pub has_username_pin: Option<bool>,
    /// field 52, wire `is_a_contact`
    pub is_acontact: Option<bool>,
    /// field 53, wire `is_a_contact_at_thread_creation`
    pub is_acontact_at_thread_creation: Option<bool>,
    /// field 54, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 55, wire `is_archived`
    pub is_archived: Option<bool>,
    /// field 57, wire `is_deleted`
    pub is_deleted: Option<bool>,
    /// field 58, wire `is_invite_created_thread`
    pub is_invite_created_thread: Option<bool>,
    /// field 59, wire `is_meta_ai_assistant`
    pub is_meta_ai_assistant: Option<bool>,
    /// field 60, wire `is_pinned`
    pub is_pinned: Option<bool>,
    /// field 61, wire `is_pnh_enabled_chat`
    pub is_pnh_enabled_chat: Option<bool>,
    /// field 62, wire `marked_read_cnt`
    pub marked_read_cnt: Option<i64>,
    /// field 63, wire `marked_read_message_cnt`
    pub marked_read_message_cnt: Option<i64>,
    /// field 64, wire `messages_read`
    pub messages_read: Option<i64>,
    /// field 65, wire `messages_received`
    pub messages_received: Option<i64>,
    /// field 66, wire `messages_sent`
    pub messages_sent: Option<i64>,
    /// field 68, wire `messages_unread`
    pub messages_unread: Option<i64>,
    /// field 69, wire `opposite_visible_identification`
    pub opposite_visible_identification: Option<OPPOSITEVISIBLEIDENTIFICATIONTYPE>,
    /// field 70, wire `photo_messages_received`
    pub photo_messages_received: Option<i64>,
    /// field 71, wire `photo_messages_sent`
    pub photo_messages_sent: Option<i64>,
    /// field 72, wire `poll_creation_messages_received`
    pub poll_creation_messages_received: Option<i64>,
    /// field 73, wire `poll_creation_messages_sent`
    pub poll_creation_messages_sent: Option<i64>,
    /// field 74, wire `poll_update_messages_received`
    pub poll_update_messages_received: Option<i64>,
    /// field 75, wire `poll_update_messages_sent`
    pub poll_update_messages_sent: Option<i64>,
    /// field 76, wire `profile_replies`
    pub profile_replies: Option<i64>,
    /// field 77, wire `profile_views`
    pub profile_views: Option<i64>,
    /// field 78, wire `ptt_messages_received`
    pub ptt_messages_received: Option<i64>,
    /// field 79, wire `ptt_messages_sent`
    pub ptt_messages_sent: Option<i64>,
    /// field 80, wire `ptv_messages_received`
    pub ptv_messages_received: Option<i64>,
    /// field 81, wire `ptv_messages_sent`
    pub ptv_messages_sent: Option<i64>,
    /// field 82, wire `reactions_received`
    pub reactions_received: Option<i64>,
    /// field 83, wire `reactions_sent`
    pub reactions_sent: Option<i64>,
    /// field 85, wire `replies_sent`
    pub replies_sent: Option<i64>,
    /// field 86, wire `requested_phone_number`
    pub requested_phone_number: Option<bool>,
    /// field 87, wire `seen_masked_phone_number`
    pub seen_masked_phone_number: Option<bool>,
    /// field 89, wire `shared_phone_number`
    pub shared_phone_number: Option<bool>,
    /// field 90, wire `status_reactions_received`
    pub status_reactions_received: Option<i64>,
    /// field 91, wire `status_replies`
    pub status_replies: Option<i64>,
    /// field 92, wire `status_views`
    pub status_views: Option<i64>,
    /// field 93, wire `sticker_messages_received`
    pub sticker_messages_received: Option<i64>,
    /// field 94, wire `sticker_messages_sent`
    pub sticker_messages_sent: Option<i64>,
    /// field 95, wire `text_messages_received`
    pub text_messages_received: Option<i64>,
    /// field 96, wire `text_messages_sent`
    pub text_messages_sent: Option<i64>,
    /// field 97, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 98, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 99, wire `url_messages_received`
    pub url_messages_received: Option<i64>,
    /// field 100, wire `url_messages_sent`
    pub url_messages_sent: Option<i64>,
    /// field 102, wire `video_messages_received`
    pub video_messages_received: Option<i64>,
    /// field 103, wire `video_messages_sent`
    pub video_messages_sent: Option<i64>,
    /// field 104, wire `view_once_messages_opened`
    pub view_once_messages_opened: Option<i64>,
    /// field 105, wire `view_once_messages_received`
    pub view_once_messages_received: Option<i64>,
    /// field 106, wire `view_once_messages_sent`
    pub view_once_messages_sent: Option<i64>,
    /// field 107, wire `shares_common_group`
    pub shares_common_group: Option<bool>,
    /// field 108, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 109, wire `thread_id_by_lid`
    pub thread_id_by_lid: Option<String>,
    /// field 110, wire `ephemeral_messages_expired`
    pub ephemeral_messages_expired: Option<i64>,
    /// field 111, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
    /// field 112, wire `is_guest_thread`
    pub is_guest_thread: Option<bool>,
    /// field 113, wire `group_status_likes_others_to_others`
    pub group_status_likes_others_to_others: Option<i64>,
    /// field 114, wire `group_status_likes_others_to_own`
    pub group_status_likes_others_to_own: Option<i64>,
    /// field 115, wire `group_status_likes_own_to_others`
    pub group_status_likes_own_to_others: Option<i64>,
    /// field 116, wire `group_status_likes_own_to_own`
    pub group_status_likes_own_to_own: Option<i64>,
    /// field 117, wire `group_status_replies_others_to_others`
    pub group_status_replies_others_to_others: Option<i64>,
    /// field 118, wire `group_status_replies_others_to_own`
    pub group_status_replies_others_to_own: Option<i64>,
    /// field 119, wire `group_status_replies_own_to_others`
    pub group_status_replies_own_to_others: Option<i64>,
    /// field 120, wire `group_status_replies_own_to_own`
    pub group_status_replies_own_to_own: Option<i64>,
    /// field 121, wire `is_managed_account`
    pub is_managed_account: Option<bool>,
    /// field 122, wire `is_new_managed_account_em_ignored`
    pub is_new_managed_account_em_ignored: Option<bool>,
    /// field 123, wire `is_username_thread`
    pub is_username_thread: Option<bool>,
    /// field 124, wire `limit_sharing_option`
    pub limit_sharing_option: Option<bool>,
    /// field 125, wire `opposite_party_limit_sharing_option`
    pub opposite_party_limit_sharing_option: Option<bool>,
    /// field 126, wire `status_reactions_sent`
    pub status_reactions_sent: Option<i64>,
    /// field 127, wire `status_reply_messages_received`
    pub status_reply_messages_received: Option<i64>,
    /// field 128, wire `tombstone_ephemeral_messages_received`
    pub tombstone_ephemeral_messages_received: Option<i64>,
    /// field 129, wire `tombstone_view_once_messages_received`
    pub tombstone_view_once_messages_received: Option<i64>,
    /// field 130, wire `tombstone_ai_futureproofed_messages_received`
    pub tombstone_ai_futureproofed_messages_received: Option<i64>,
    /// field 131, wire `matched_messages_marked_as_read_with_delta_time`
    pub matched_messages_marked_as_read_with_delta_time: Option<String>,
    /// field 132, wire `matched_messages_read_with_delta_time`
    pub matched_messages_read_with_delta_time: Option<String>,
    /// field 133, wire `messages_received_with_enabled_read_receipt`
    pub messages_received_with_enabled_read_receipt: Option<i64>,
    /// field 134, wire `forward_ptv_messages_received`
    pub forward_ptv_messages_received: Option<i64>,
    /// field 135, wire `forward_ptv_messages_sent`
    pub forward_ptv_messages_sent: Option<i64>,
    /// field 136, wire `is_message_yourself`
    pub is_message_yourself: Option<bool>,
    /// field 137, wire `is_username_thread_at_creation`
    pub is_username_thread_at_creation: Option<bool>,
    /// field 138, wire `after_read_duration`
    pub after_read_duration: Option<i64>,
    /// field 139, wire `after_read_messages_expired`
    pub after_read_messages_expired: Option<i64>,
    /// field 140, wire `after_read_messages_sent`
    pub after_read_messages_sent: Option<i64>,
    /// field 141, wire `after_read_messages_unread_expired`
    pub after_read_messages_unread_expired: Option<i64>,
    /// field 142, wire `after_read_turned_off`
    pub after_read_turned_off: Option<bool>,
    /// field 143, wire `after_read_turned_on`
    pub after_read_turned_on: Option<bool>,
    /// field 144, wire `after_read_messages_received`
    pub after_read_messages_received: Option<i64>,
    /// field 145, wire `has_replied1_on1`
    pub has_replied1_on1: Option<bool>,
    /// field 146, wire `opposite_party_has_profile_photo`
    pub opposite_party_has_profile_photo: Option<bool>,
}