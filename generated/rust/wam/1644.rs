pub const WAM_CHAT_MESSAGE_COUNTS: u32 = 1644;

#[derive(Debug, Default)]
pub struct ChatMessageCountsEvent {
    /// field 2, wire `chat_type_ind`
    pub chat_type_ind: Option<CHATTYPE>,
    /// field 3, wire `messages_sent`
    pub messages_sent: Option<i64>,
    /// field 4, wire `messages_received`
    pub messages_received: Option<i64>,
    /// field 5, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 6, wire `is_a_contact`
    pub is_acontact: Option<bool>,
    /// field 7, wire `start_time`
    pub start_time: Option<i64>,
    /// field 8, wire `chat_muted`
    pub chat_muted: Option<CHATMUTEDTYPE>,
    /// field 9, wire `is_pinned`
    pub is_pinned: Option<bool>,
    /// field 10, wire `is_archived`
    pub is_archived: Option<bool>,
    /// field 11, wire `messages_unread`
    pub messages_unread: Option<i64>,
    /// field 12, wire `messages_starred`
    pub messages_starred: Option<i64>,
    /// field 13, wire `ephemeral_messages_sent`
    pub ephemeral_messages_sent: Option<i64>,
    /// field 14, wire `ephemeral_messages_received`
    pub ephemeral_messages_received: Option<i64>,
    /// field 15, wire `chat_ephemerality_duration`
    pub chat_ephemerality_duration: Option<i64>,
    /// field 16, wire `view_once_messages_sent`
    pub view_once_messages_sent: Option<i64>,
    /// field 17, wire `view_once_messages_received`
    pub view_once_messages_received: Option<i64>,
    /// field 18, wire `view_once_messages_opened`
    pub view_once_messages_opened: Option<i64>,
    /// field 19, wire `group_size`
    pub group_size: Option<i64>,
    /// field 20, wire `sender_default_disappearing_duration`
    pub sender_default_disappearing_duration: Option<i64>,
    /// field 21, wire `receiver_default_disappearing_duration`
    pub receiver_default_disappearing_duration: Option<i64>,
    /// field 22, wire `ga_status`
    pub ga_status: Option<GASTATUS>,
    /// field 25, wire `first_response_time`
    pub first_response_time: Option<i64>,
    /// field 26, wire `call_offers_sent`
    pub call_offers_sent: Option<i64>,
    /// field 27, wire `call_offers_received`
    pub call_offers_received: Option<i64>,
    /// field 28, wire `total_call_duration`
    pub total_call_duration: Option<i64>,
    /// field 29, wire `broadcast_msgs_sent`
    pub broadcast_msgs_sent: Option<i64>,
    /// field 30, wire `broadcast_msgs_received`
    pub broadcast_msgs_received: Option<i64>,
    /// field 31, wire `spam_reports`
    pub spam_reports: Option<i64>,
    /// field 32, wire `is_blocked`
    pub is_blocked: Option<bool>,
    /// field 33, wire `block_reason`
    pub block_reason: Option<BLOCKREASON>,
    /// field 35, wire `is_commerce_viewed`
    pub is_commerce_viewed: Option<bool>,
    /// field 36, wire `is_cart_add_clicked`
    pub is_cart_add_clicked: Option<bool>,
    /// field 37, wire `is_cta_on_pdp_clicked`
    pub is_cta_on_pdp_clicked: Option<bool>,
    /// field 38, wire `orders_sent`
    pub orders_sent: Option<i64>,
    /// field 39, wire `payments_sent`
    pub payments_sent: Option<i64>,
    /// field 40, wire `commerce_msgs_sent`
    pub commerce_msgs_sent: Option<i64>,
    /// field 41, wire `commerce_msgs_received`
    pub commerce_msgs_received: Option<i64>,
    /// field 42, wire `pdp_inquiries_sent`
    pub pdp_inquiries_sent: Option<i64>,
    /// field 43, wire `storefront_inquiries_sent`
    pub storefront_inquiries_sent: Option<i64>,
    /// field 44, wire `collection_inquiries_sent`
    pub collection_inquiries_sent: Option<i64>,
    /// field 45, wire `fb_cta_inquiries_sent`
    pub fb_cta_inquiries_sent: Option<i64>,
    /// field 46, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 47, wire `entry_point_conversion_app`
    pub entry_point_conversion_app: Option<String>,
    /// field 49, wire `status_views`
    pub status_views: Option<i64>,
    /// field 50, wire `status_replies`
    pub status_replies: Option<i64>,
    /// field 51, wire `group_membership_replies`
    pub group_membership_replies: Option<i64>,
    /// field 52, wire `group_private_replies`
    pub group_private_replies: Option<i64>,
    /// field 54, wire `is_labelled`
    pub is_labelled: Option<bool>,
    /// field 55, wire `labelled_msgs`
    pub labelled_msgs: Option<i64>,
    /// field 56, wire `away_msgs_sent`
    pub away_msgs_sent: Option<i64>,
    /// field 57, wire `greeting_msgs_sent`
    pub greeting_msgs_sent: Option<i64>,
    /// field 58, wire `quick_replies_sent`
    pub quick_replies_sent: Option<i64>,
    /// field 59, wire `disappearing_chat_initiator`
    pub disappearing_chat_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 60, wire `biz_catalog_type`
    pub biz_catalog_type: Option<BIZCATALOGTYPE>,
    /// field 61, wire `pdp_views`
    pub pdp_views: Option<i64>,
    /// field 62, wire `is_opposite_party_initiated`
    pub is_opposite_party_initiated: Option<bool>,
    /// field 63, wire `profile_views`
    pub profile_views: Option<i64>,
    /// field 64, wire `profile_replies`
    pub profile_replies: Option<i64>,
    /// field 65, wire `biz_conversation_depth`
    pub biz_conversation_depth: Option<i64>,
    /// field 66, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 67, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 68, wire `new_thread`
    pub new_thread: Option<bool>,
    /// field 69, wire `ephemeral_messages_unread_expired`
    pub ephemeral_messages_unread_expired: Option<i64>,
    /// field 70, wire `calls_result_busy`
    pub calls_result_busy: Option<i64>,
    /// field 71, wire `calls_result_cancelled`
    pub calls_result_cancelled: Option<i64>,
    /// field 72, wire `calls_result_connected`
    pub calls_result_connected: Option<i64>,
    /// field 73, wire `calls_result_missed`
    pub calls_result_missed: Option<i64>,
    /// field 74, wire `calls_result_rejected`
    pub calls_result_rejected: Option<i64>,
    /// field 75, wire `group_contains_biz`
    pub group_contains_biz: Option<bool>,
    /// field 76, wire `video_calls_offered`
    pub video_calls_offered: Option<i64>,
    /// field 77, wire `voice_calls_offered`
    pub voice_calls_offered: Option<i64>,
    /// field 78, wire `calls_result_error`
    pub calls_result_error: Option<i64>,
    /// field 79, wire `chat_overflow_clicks`
    pub chat_overflow_clicks: Option<i64>,
    /// field 80, wire `replies_sent`
    pub replies_sent: Option<i64>,
    /// field 81, wire `is_wa_pay_registered`
    pub is_wa_pay_registered: Option<bool>,
    /// field 82, wire `od_received`
    pub od_received: Option<i64>,
    /// field 83, wire `p2m_od_nnp_transactions_sent`
    pub p2m_od_nnp_transactions_sent: Option<i64>,
    /// field 84, wire `p2m_od_np_transactions_sent`
    pub p2m_od_np_transactions_sent: Option<i64>,
    /// field 85, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 86, wire `cart_views`
    pub cart_views: Option<i64>,
    /// field 87, wire `group_info_setting`
    pub group_info_setting: Option<GROUPINFOSETTINGTYPE>,
    /// field 88, wire `can_edit_dm_settings`
    pub can_edit_dm_settings: Option<bool>,
    /// field 89, wire `forward_messages_received`
    pub forward_messages_received: Option<i64>,
    /// field 90, wire `forward_messages_sent`
    pub forward_messages_sent: Option<i64>,
    /// field 91, wire `is_message_yourself`
    pub is_message_yourself: Option<bool>,
    /// field 92, wire `is_pnh_enabled_chat`
    pub is_pnh_enabled_chat: Option<bool>,
    /// field 93, wire `requested_phone_number`
    pub requested_phone_number: Option<bool>,
    /// field 94, wire `seen_masked_phone_number`
    pub seen_masked_phone_number: Option<bool>,
    /// field 96, wire `locations_sent`
    pub locations_sent: Option<i64>,
    /// field 97, wire `reactions_received`
    pub reactions_received: Option<i64>,
    /// field 98, wire `reactions_sent`
    pub reactions_sent: Option<i64>,
    /// field 99, wire `shared_phone_number`
    pub shared_phone_number: Option<bool>,
    /// field 100, wire `edited_msgs_sent`
    pub edited_msgs_sent: Option<i64>,
    /// field 101, wire `smb_marketing_messages_reactions_sent`
    pub smb_marketing_messages_reactions_sent: Option<i64>,
    /// field 102, wire `smb_marketing_messages_replies_sent`
    pub smb_marketing_messages_replies_sent: Option<i64>,
    /// field 103, wire `smb_marketing_messages_spam_reports`
    pub smb_marketing_messages_spam_reports: Option<i64>,
    /// field 104, wire `smb_marketing_msgs_received`
    pub smb_marketing_msgs_received: Option<i64>,
    /// field 105, wire `smb_marketing_msgs_sent`
    pub smb_marketing_msgs_sent: Option<i64>,
    /// field 106, wire `is_invite_created_thread`
    pub is_invite_created_thread: Option<bool>,
    /// field 107, wire `via_contactless_chats`
    pub via_contactless_chats: Option<bool>,
    /// field 108, wire `is_auto_muted`
    pub is_auto_muted: Option<bool>,
    /// field 109, wire `ephemerality_initiator`
    pub ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 110, wire `ephemerality_trigger_action`
    pub ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 111, wire `is_user_agent`
    pub is_user_agent: Option<bool>,
    /// field 112, wire `total_message_edits_from_agent_cnt`
    pub total_message_edits_from_agent_cnt: Option<i64>,
    /// field 113, wire `total_message_from_agent_cnt`
    pub total_message_from_agent_cnt: Option<i64>,
    /// field 114, wire `total_message_to_agent_cnt`
    pub total_message_to_agent_cnt: Option<i64>,
    /// field 115, wire `poll_creation_messages_received`
    pub poll_creation_messages_received: Option<i64>,
    /// field 116, wire `poll_creation_messages_sent`
    pub poll_creation_messages_sent: Option<i64>,
    /// field 117, wire `poll_update_messages_received`
    pub poll_update_messages_received: Option<i64>,
    /// field 118, wire `poll_update_messages_sent`
    pub poll_update_messages_sent: Option<i64>,
    /// field 119, wire `ptt_messages_received`
    pub ptt_messages_received: Option<i64>,
    /// field 120, wire `ptt_messages_sent`
    pub ptt_messages_sent: Option<i64>,
    /// field 121, wire `ptv_messages_received`
    pub ptv_messages_received: Option<i64>,
    /// field 122, wire `ptv_messages_sent`
    pub ptv_messages_sent: Option<i64>,
    /// field 123, wire `is_user_created_agent`
    pub is_user_created_agent: Option<bool>,
    /// field 124, wire `text_messages_to_user_created_agent_cnt`
    pub text_messages_to_user_created_agent_cnt: Option<i64>,
    /// field 125, wire `total_messages_to_user_created_agent_cnt`
    pub total_messages_to_user_created_agent_cnt: Option<i64>,
    /// field 126, wire `comments_received`
    pub comments_received: Option<i64>,
    /// field 127, wire `messages_read`
    pub messages_read: Option<i64>,
    /// field 128, wire `forward_photo_messages_received`
    pub forward_photo_messages_received: Option<i64>,
    /// field 129, wire `forward_photo_messages_sent`
    pub forward_photo_messages_sent: Option<i64>,
    /// field 130, wire `forward_text_messages_received`
    pub forward_text_messages_received: Option<i64>,
    /// field 131, wire `forward_text_messages_sent`
    pub forward_text_messages_sent: Option<i64>,
    /// field 132, wire `forward_url_messages_received`
    pub forward_url_messages_received: Option<i64>,
    /// field 133, wire `forward_url_messages_sent`
    pub forward_url_messages_sent: Option<i64>,
    /// field 134, wire `photo_messages_received`
    pub photo_messages_received: Option<i64>,
    /// field 135, wire `photo_messages_sent`
    pub photo_messages_sent: Option<i64>,
    /// field 136, wire `text_messages_received`
    pub text_messages_received: Option<i64>,
    /// field 137, wire `text_messages_sent`
    pub text_messages_sent: Option<i64>,
    /// field 138, wire `url_messages_received`
    pub url_messages_received: Option<i64>,
    /// field 139, wire `url_messages_sent`
    pub url_messages_sent: Option<i64>,
    /// field 140, wire `is_user3p_bot_chat`
    pub is_user3p_bot_chat: Option<bool>,
    /// field 141, wire `is_user1p_biz_bot_chat`
    pub is_user1p_biz_bot_chat: Option<bool>,
    /// field 142, wire `event_creation_messages_received`
    pub event_creation_messages_received: Option<i64>,
    /// field 143, wire `event_creation_messages_sent`
    pub event_creation_messages_sent: Option<i64>,
    /// field 144, wire `event_response_messages_received`
    pub event_response_messages_received: Option<i64>,
    /// field 145, wire `event_response_messages_sent`
    pub event_response_messages_sent: Option<i64>,
    /// field 146, wire `imagine_mention_click`
    pub imagine_mention_click: Option<i64>,
    /// field 147, wire `meta_ai_mention_click`
    pub meta_ai_mention_click: Option<i64>,
    /// field 148, wire `meta_ai_mention_show`
    pub meta_ai_mention_show: Option<i64>,
    /// field 149, wire `audio_messages_received`
    pub audio_messages_received: Option<i64>,
    /// field 150, wire `audio_messages_sent`
    pub audio_messages_sent: Option<i64>,
    /// field 151, wire `document_messages_received`
    pub document_messages_received: Option<i64>,
    /// field 152, wire `document_messages_sent`
    pub document_messages_sent: Option<i64>,
    /// field 153, wire `forward_audio_messages_received`
    pub forward_audio_messages_received: Option<i64>,
    /// field 154, wire `forward_audio_messages_sent`
    pub forward_audio_messages_sent: Option<i64>,
    /// field 155, wire `forward_document_messages_received`
    pub forward_document_messages_received: Option<i64>,
    /// field 156, wire `forward_document_messages_sent`
    pub forward_document_messages_sent: Option<i64>,
    /// field 157, wire `forward_gif_messages_received`
    pub forward_gif_messages_received: Option<i64>,
    /// field 158, wire `forward_gif_messages_sent`
    pub forward_gif_messages_sent: Option<i64>,
    /// field 159, wire `forward_ptv_messages_received`
    pub forward_ptv_messages_received: Option<i64>,
    /// field 160, wire `forward_ptv_messages_sent`
    pub forward_ptv_messages_sent: Option<i64>,
    /// field 161, wire `forward_status_reply_messages_received`
    pub forward_status_reply_messages_received: Option<i64>,
    /// field 162, wire `forward_status_reply_messages_sent`
    pub forward_status_reply_messages_sent: Option<i64>,
    /// field 163, wire `forward_sticker_messages_received`
    pub forward_sticker_messages_received: Option<i64>,
    /// field 164, wire `forward_sticker_messages_sent`
    pub forward_sticker_messages_sent: Option<i64>,
    /// field 165, wire `forward_video_messages_received`
    pub forward_video_messages_received: Option<i64>,
    /// field 166, wire `forward_video_messages_sent`
    pub forward_video_messages_sent: Option<i64>,
    /// field 167, wire `gif_messages_received`
    pub gif_messages_received: Option<i64>,
    /// field 168, wire `gif_messages_sent`
    pub gif_messages_sent: Option<i64>,
    /// field 169, wire `status_reply_messages_received`
    pub status_reply_messages_received: Option<i64>,
    /// field 170, wire `sticker_messages_received`
    pub sticker_messages_received: Option<i64>,
    /// field 171, wire `sticker_messages_sent`
    pub sticker_messages_sent: Option<i64>,
    /// field 172, wire `video_messages_received`
    pub video_messages_received: Option<i64>,
    /// field 173, wire `video_messages_sent`
    pub video_messages_sent: Option<i64>,
    /// field 174, wire `command_sheet_show`
    pub command_sheet_show: Option<i64>,
    /// field 175, wire `imagine_command_click`
    pub imagine_command_click: Option<i64>,
    /// field 176, wire `imagine_mention_show`
    pub imagine_mention_show: Option<i64>,
    /// field 177, wire `suggestion_prompts_click`
    pub suggestion_prompts_click: Option<i64>,
    /// field 178, wire `suggestion_prompts_show`
    pub suggestion_prompts_show: Option<i64>,
    /// field 179, wire `chat_origins`
    pub chat_origins: Option<CHATORIGINSTYPE>,
    /// field 180, wire `has_username`
    pub has_username: Option<bool>,
    /// field 181, wire `opposite_visible_identification`
    pub opposite_visible_identification: Option<OPPOSITEVISIBLEIDENTIFICATIONTYPE>,
    /// field 185, wire `is_deleted`
    pub is_deleted: Option<bool>,
    /// field 186, wire `is_reported`
    pub is_reported: Option<bool>,
    /// field 189, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
    /// field 190, wire `auto_reply_from_icebreaker_sent`
    pub auto_reply_from_icebreaker_sent: Option<i64>,
    /// field 191, wire `status_reactions_received`
    pub status_reactions_received: Option<i64>,
    /// field 192, wire `status_reactions_sent`
    pub status_reactions_sent: Option<i64>,
    /// field 193, wire `marked_read_cnt`
    pub marked_read_cnt: Option<i64>,
    /// field 194, wire `marked_read_message_cnt`
    pub marked_read_message_cnt: Option<i64>,
    /// field 195, wire `ai_discovery_tab`
    pub ai_discovery_tab: Option<String>,
    /// field 196, wire `bottom_sheet_forward_messages_sent`
    pub bottom_sheet_forward_messages_sent: Option<i64>,
    /// field 197, wire `bottom_sheet_images_generated`
    pub bottom_sheet_images_generated: Option<i64>,
    /// field 198, wire `bottom_sheet_messages_downloaded`
    pub bottom_sheet_messages_downloaded: Option<i64>,
    /// field 199, wire `bottom_sheet_messages_received`
    pub bottom_sheet_messages_received: Option<i64>,
    /// field 200, wire `bottom_sheet_messages_sent`
    pub bottom_sheet_messages_sent: Option<i64>,
    /// field 201, wire `bottom_sheet_prompts_initiated`
    pub bottom_sheet_prompts_initiated: Option<i64>,
    /// field 202, wire `imagine_me_messages_sent`
    pub imagine_me_messages_sent: Option<i64>,
    /// field 203, wire `imagine_me_prompts_initiated_count`
    pub imagine_me_prompts_initiated_count: Option<i64>,
    /// field 204, wire `opposite_party_has_business_intent`
    pub opposite_party_has_business_intent: Option<bool>,
    /// field 205, wire `user_has_business_intent`
    pub user_has_business_intent: Option<bool>,
    /// field 206, wire `bottom_sheet_animated_sent`
    pub bottom_sheet_animated_sent: Option<i64>,
    /// field 207, wire `bottom_sheet_edited_animated_sent`
    pub bottom_sheet_edited_animated_sent: Option<i64>,
    /// field 208, wire `bottom_sheet_edited_sent`
    pub bottom_sheet_edited_sent: Option<i64>,
    /// field 209, wire `bottom_sheet_images_edited`
    pub bottom_sheet_images_edited: Option<i64>,
    /// field 210, wire `bottom_sheet_regenerated_sent`
    pub bottom_sheet_regenerated_sent: Option<i64>,
    /// field 211, wire `is_meta_ai_assistant`
    pub is_meta_ai_assistant: Option<bool>,
    /// field 213, wire `is_a_contact_at_thread_creation`
    pub is_acontact_at_thread_creation: Option<bool>,
    /// field 214, wire `google_search_click`
    pub google_search_click: Option<i64>,
    /// field 215, wire `google_search_show`
    pub google_search_show: Option<i64>,
    /// field 216, wire `has_replied1_on1`
    pub has_replied1_on1: Option<bool>,
    /// field 217, wire `opposite_party_has_profile_photo`
    pub opposite_party_has_profile_photo: Option<bool>,
    /// field 218, wire `shares_common_group`
    pub shares_common_group: Option<bool>,
    /// field 219, wire `device_language`
    pub device_language: Option<String>,
    /// field 220, wire `bottom_sheet_memu_images_generated`
    pub bottom_sheet_memu_images_generated: Option<i64>,
    /// field 221, wire `bottom_sheet_memu_initiated`
    pub bottom_sheet_memu_initiated: Option<i64>,
    /// field 222, wire `bottom_sheet_memu_messages_sent`
    pub bottom_sheet_memu_messages_sent: Option<i64>,
    /// field 223, wire `thread_id_monthly`
    pub thread_id_monthly: Option<String>,
    /// field 224, wire `ai_chat_origins`
    pub ai_chat_origins: Option<AICHATORIGINSTYPE>,
    /// field 225, wire `group_limit_sharing_on_cnt`
    pub group_limit_sharing_on_cnt: Option<i64>,
    /// field 226, wire `limit_sharing_option`
    pub limit_sharing_option: Option<bool>,
    /// field 227, wire `opposite_party_limit_sharing_option`
    pub opposite_party_limit_sharing_option: Option<bool>,
    /// field 228, wire `has_username_pin`
    pub has_username_pin: Option<bool>,
    /// field 229, wire `fmx_not_mv_clicks`
    pub fmx_not_mv_clicks: Option<i64>,
    /// field 230, wire `is_biz_mv_friction_eligible`
    pub is_biz_mv_friction_eligible: Option<bool>,
    /// field 231, wire `not_mv_impressions`
    pub not_mv_impressions: Option<i64>,
    /// field 234, wire `fmx_not_mv_bottom_sheet_dismissed_count`
    pub fmx_not_mv_bottom_sheet_dismissed_count: Option<i64>,
    /// field 235, wire `fmx_not_mv_bottom_sheet_get_mv_button_clicks`
    pub fmx_not_mv_bottom_sheet_get_mv_button_clicks: Option<i64>,
    /// field 236, wire `fmx_not_mv_bottom_sheet_get_mv_button_impressions`
    pub fmx_not_mv_bottom_sheet_get_mv_button_impressions: Option<i64>,
    /// field 237, wire `fmx_not_mv_bottom_sheet_impressions`
    pub fmx_not_mv_bottom_sheet_impressions: Option<i64>,
    /// field 238, wire `fmx_not_mv_bottom_sheet_learn_more_button_clicks`
    pub fmx_not_mv_bottom_sheet_learn_more_button_clicks: Option<i64>,
    /// field 240, wire `opposite_party_has_badge`
    pub opposite_party_has_badge: Option<bool>,
    /// field 245, wire `messages_received_with_enabled_read_receipt`
    pub messages_received_with_enabled_read_receipt: Option<i64>,
    /// field 246, wire `matched_messages_marked_as_read_with_delta_time`
    pub matched_messages_marked_as_read_with_delta_time: Option<String>,
    /// field 247, wire `matched_messages_read_with_delta_time`
    pub matched_messages_read_with_delta_time: Option<String>,
    /// field 248, wire `ephemeral_messages_expired`
    pub ephemeral_messages_expired: Option<i64>,
    /// field 249, wire `group_status_likes_others_to_others`
    pub group_status_likes_others_to_others: Option<i64>,
    /// field 250, wire `group_status_likes_others_to_own`
    pub group_status_likes_others_to_own: Option<i64>,
    /// field 251, wire `group_status_likes_own_to_others`
    pub group_status_likes_own_to_others: Option<i64>,
    /// field 252, wire `group_status_likes_own_to_own`
    pub group_status_likes_own_to_own: Option<i64>,
    /// field 253, wire `group_status_replies_others_to_others`
    pub group_status_replies_others_to_others: Option<i64>,
    /// field 254, wire `group_status_replies_others_to_own`
    pub group_status_replies_others_to_own: Option<i64>,
    /// field 255, wire `group_status_replies_own_to_others`
    pub group_status_replies_own_to_others: Option<i64>,
    /// field 256, wire `group_status_replies_own_to_own`
    pub group_status_replies_own_to_own: Option<i64>,
    /// field 257, wire `is_guest_thread`
    pub is_guest_thread: Option<bool>,
    /// field 258, wire `is_username_thread`
    pub is_username_thread: Option<bool>,
    /// field 259, wire `is_username_thread_at_creation`
    pub is_username_thread_at_creation: Option<bool>,
    /// field 260, wire `is_managed_account`
    pub is_managed_account: Option<bool>,
    /// field 261, wire `is_new_managed_account_em_ignored`
    pub is_new_managed_account_em_ignored: Option<bool>,
    /// field 262, wire `tombstone_ephemeral_messages_received`
    pub tombstone_ephemeral_messages_received: Option<i64>,
    /// field 263, wire `tombstone_view_once_messages_received`
    pub tombstone_view_once_messages_received: Option<i64>,
    /// field 264, wire `tombstone_ai_futureproofed_messages_received`
    pub tombstone_ai_futureproofed_messages_received: Option<i64>,
}