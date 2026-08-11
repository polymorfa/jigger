pub const WAM_MESSAGE_SEND: u32 = 854;

#[derive(Debug, Default)]
pub struct MessageSendEvent {
    /// field 1, wire `message_send_result`
    pub message_send_result: Option<MESSAGESENDRESULTTYPE>,
    /// field 2, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 3, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 4, wire `message_is_forward`
    pub message_is_forward: Option<bool>,
    /// field 5, wire `message_is_fanout`
    pub message_is_fanout: Option<bool>,
    /// field 6, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 7, wire `message_is_international`
    pub message_is_international: Option<bool>,
    /// field 8, wire `media_caption_present`
    pub media_caption_present: Option<bool>,
    /// field 9, wire `e2e_ciphertext_version`
    pub e2e_ciphertext_version: Option<i64>,
    /// field 10, wire `e2e_ciphertext_type`
    pub e2e_ciphertext_type: Option<E2ECIPHERTEXTTYPE>,
    /// field 11, wire `message_send_t`
    pub message_send_t: Option<String>,
    /// field 12, wire `message_send_opt_upload_enabled`
    pub message_send_opt_upload_enabled: Option<bool>,
    /// field 13, wire `message_is_fast_forward`
    pub message_is_fast_forward: Option<bool>,
    /// field 14, wire `message_forward_age_t`
    pub message_forward_age_t: Option<String>,
    /// field 15, wire `fast_forward_enabled`
    pub fast_forward_enabled: Option<bool>,
    /// field 16, wire `resend_count`
    pub resend_count: Option<i64>,
    /// field 17, wire `message_send_result_is_terminal`
    pub message_send_result_is_terminal: Option<bool>,
    /// field 18, wire `sticker_is_first_party`
    pub sticker_is_first_party: Option<bool>,
    /// field 19, wire `is_from_wamsys`
    pub is_from_wamsys: Option<bool>,
    /// field 20, wire `thumb_size`
    pub thumb_size: Option<String>,
    /// field 21, wire `ephemerality_duration`
    pub ephemerality_duration: Option<i64>,
    /// field 22, wire `is_view_once`
    pub is_view_once: Option<bool>,
    /// field 23, wire `e2e_backfill`
    pub e2e_backfill: Option<bool>,
    /// field 24, wire `message_is_revoke`
    pub message_is_revoke: Option<bool>,
    /// field 25, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
    /// field 26, wire `message_is_first_user_message`
    pub message_is_first_user_message: Option<bool>,
    /// field 27, wire `sender_default_disappearing_duration`
    pub sender_default_disappearing_duration: Option<i64>,
    /// field 28, wire `receiver_default_disappearing_duration`
    pub receiver_default_disappearing_duration: Option<i64>,
    /// field 29, wire `message_is_invisible`
    pub message_is_invisible: Option<bool>,
    /// field 30, wire `disappearing_chat_initiator`
    pub disappearing_chat_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 31, wire `device_count`
    pub device_count: Option<i64>,
    /// field 32, wire `participant_count`
    pub participant_count: Option<i64>,
    /// field 33, wire `revoke_duration`
    pub revoke_duration: Option<i64>,
    /// field 34, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
    /// field 35, wire `is_a_reply`
    pub is_areply: Option<bool>,
    /// field 36, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 37, wire `network_was_disconnected`
    pub network_was_disconnected: Option<bool>,
    /// field 38, wire `sticker_is_avatar`
    pub sticker_is_avatar: Option<bool>,
    /// field 39, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 40, wire `excess_payload_kb_size`
    pub excess_payload_kb_size: Option<i64>,
    /// field 41, wire `message_distribution_type`
    pub message_distribution_type: Option<MESSAGEDISTRIBUTIONENUMTYPE>,
    /// field 42, wire `overall_media_size`
    pub overall_media_size: Option<String>,
    /// field 43, wire `edit_duration`
    pub edit_duration: Option<i64>,
    /// field 44, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 45, wire `send_button_press_t`
    pub send_button_press_t: Option<i64>,
    /// field 46, wire `e2e_failure_reason`
    pub e2e_failure_reason: Option<E2EFAILUREREASON>,
    /// field 47, wire `ephemerality_initiator`
    pub ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 48, wire `ephemerality_trigger_action`
    pub ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 49, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 50, wire `sticker_is_ai`
    pub sticker_is_ai: Option<bool>,
    /// field 51, wire `sticker_is_from_sticker_maker`
    pub sticker_is_from_sticker_maker: Option<bool>,
    /// field 52, wire `sticker_maker_source_type`
    pub sticker_maker_source_type: Option<STICKERMAKERSOURCETYPE>,
    /// field 53, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 54, wire `is_a_comment`
    pub is_acomment: Option<bool>,
    /// field 55, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 56, wire `server_error_code`
    pub server_error_code: Option<i64>,
    /// field 57, wire `message_key_hash`
    pub message_key_hash: Option<String>,
    /// field 58, wire `chat_origins`
    pub chat_origins: Option<CHATORIGINSTYPE>,
    /// field 59, wire `has_username`
    pub has_username: Option<bool>,
    /// field 60, wire `opposite_visible_identification`
    pub opposite_visible_identification: Option<OPPOSITEVISIBLEIDENTIFICATIONTYPE>,
    /// field 61, wire `media_upload_error`
    pub media_upload_error: Option<MEDIAUPLOADRESULTTYPE>,
    /// field 62, wire `media_upload_retry_count`
    pub media_upload_retry_count: Option<i64>,
    /// field 63, wire `running_tasks`
    pub running_tasks: Option<String>,
    /// field 64, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 65, wire `user_to_device_size_bucket`
    pub user_to_device_size_bucket: Option<String>,
    /// field 66, wire `message_send_source`
    pub message_send_source: Option<MESSAGESENDSOURCE>,
    /// field 67, wire `chat_session_id`
    pub chat_session_id: Option<String>,
    /// field 68, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 69, wire `is_premium`
    pub is_premium: Option<bool>,
    /// field 70, wire `logout_reason`
    pub logout_reason: Option<LOGOUTREASONTYPE>,
    /// field 71, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 72, wire `app_context`
    pub app_context: Option<String>,
    /// field 73, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 74, wire `has_username_pin`
    pub has_username_pin: Option<bool>,
    /// field 75, wire `is_whatsapi_build`
    pub is_whatsapi_build: Option<bool>,
    /// field 76, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 77, wire `shared_phone_number_contact_size`
    pub shared_phone_number_contact_size: Option<i64>,
    /// field 78, wire `shared_phone_number_with_username_contact_size`
    pub shared_phone_number_with_username_contact_size: Option<i64>,
    /// field 79, wire `shared_username_contact_size`
    pub shared_username_contact_size: Option<i64>,
    /// field 81, wire `private_ai_feature_name`
    pub private_ai_feature_name: Option<PRIVATEAIFEATURENAME>,
    /// field 82, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 83, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 84, wire `shared_contact_card_type`
    pub shared_contact_card_type: Option<String>,
    /// field 85, wire `shared_contact_metadata_types`
    pub shared_contact_metadata_types: Option<String>,
    /// field 86, wire `sticker_is_premium`
    pub sticker_is_premium: Option<bool>,
    /// field 87, wire `after_read_duration`
    pub after_read_duration: Option<i64>,
    /// field 88, wire `is_after_read`
    pub is_after_read: Option<bool>,
    /// field 89, wire `logout_session_id`
    pub logout_session_id: Option<i64>,
    /// field 90, wire `initial_send_attempt_reachability_status`
    pub initial_send_attempt_reachability_status: Option<REACHABILITYSTATUS>,
    /// field 91, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
    /// field 92, wire `message_type_str`
    pub message_type_str: Option<String>,
    /// field 93, wire `opposite_has_username`
    pub opposite_has_username: Option<bool>,
    /// field 94, wire `is_scheduled`
    pub is_scheduled: Option<bool>,
    /// field 95, wire `message_send_retry_source`
    pub message_send_retry_source: Option<MESSAGESENDRETRYSOURCE>,
}