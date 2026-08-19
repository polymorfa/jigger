pub const WAM_MESSAGE_RECEIVE: u32 = 450;

#[derive(Debug, Default)]
pub struct MessageReceiveEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `num_of_web_urls_in_text_message`
    pub num_of_web_urls_in_text_message: Option<i64>,
    /// field 4, wire `message_is_international`
    pub message_is_international: Option<bool>,
    /// field 5, wire `message_is_offline`
    pub message_is_offline: Option<bool>,
    /// field 6, wire `message_receive_t0`
    pub message_receive_t0: Option<String>,
    /// field 7, wire `message_receive_t1`
    pub message_receive_t1: Option<String>,
    /// field 8, wire `muted_group_message`
    pub muted_group_message: Option<bool>,
    /// field 9, wire `is_view_once`
    pub is_view_once: Option<bool>,
    /// field 10, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
    /// field 11, wire `sender_default_disappearing_duration`
    pub sender_default_disappearing_duration: Option<i64>,
    /// field 12, wire `receiver_default_disappearing_duration`
    pub receiver_default_disappearing_duration: Option<i64>,
    /// field 13, wire `ephemerality_duration`
    pub ephemerality_duration: Option<i64>,
    /// field 14, wire `disappearing_chat_initiator`
    pub disappearing_chat_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 15, wire `message_queue_time`
    pub message_queue_time: Option<String>,
    /// field 16, wire `device_count`
    pub device_count: Option<i64>,
    /// field 17, wire `participant_count`
    pub participant_count: Option<i64>,
    /// field 18, wire `is_forwarded_forward`
    pub is_forwarded_forward: Option<bool>,
    /// field 19, wire `is_a_reply`
    pub is_areply: Option<bool>,
    /// field 20, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
    /// field 21, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 22, wire `padding_bytes_size`
    pub padding_bytes_size: Option<i64>,
    /// field 23, wire `message_is_invisible`
    pub message_is_invisible: Option<bool>,
    /// field 24, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 25, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 26, wire `ephemerality_initiator`
    pub ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 27, wire `ephemerality_trigger_action`
    pub ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 28, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 29, wire `sticker_is_ai`
    pub sticker_is_ai: Option<bool>,
    /// field 30, wire `offline_count`
    pub offline_count: Option<i64>,
    /// field 31, wire `sticker_is_from_sticker_maker`
    pub sticker_is_from_sticker_maker: Option<bool>,
    /// field 32, wire `sticker_maker_source_type`
    pub sticker_maker_source_type: Option<STICKERMAKERSOURCETYPE>,
    /// field 33, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 34, wire `message_addressing_mode`
    pub message_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 35, wire `server_addressing_mode`
    pub server_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 36, wire `is_a_comment`
    pub is_acomment: Option<bool>,
    /// field 37, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 38, wire `chat_origins`
    pub chat_origins: Option<CHATORIGINSTYPE>,
    /// field 39, wire `has_username`
    pub has_username: Option<bool>,
    /// field 40, wire `opposite_visible_identification`
    pub opposite_visible_identification: Option<OPPOSITEVISIBLEIDENTIFICATIONTYPE>,
    /// field 41, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 42, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 43, wire `app_context`
    pub app_context: Option<String>,
    /// field 44, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 45, wire `has_username_pin`
    pub has_username_pin: Option<bool>,
    /// field 47, wire `processing_deferred`
    pub processing_deferred: Option<bool>,
    /// field 48, wire `stanza_process_count`
    pub stanza_process_count: Option<i64>,
    /// field 49, wire `message_receive_t2`
    pub message_receive_t2: Option<String>,
    /// field 50, wire `received_phone_number_contact_size`
    pub received_phone_number_contact_size: Option<i64>,
    /// field 51, wire `received_phone_number_with_username_contact_size`
    pub received_phone_number_with_username_contact_size: Option<i64>,
    /// field 52, wire `received_username_contact_size`
    pub received_username_contact_size: Option<i64>,
    /// field 53, wire `private_ai_feature_name`
    pub private_ai_feature_name: Option<PRIVATEAIFEATURENAME>,
    /// field 54, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 55, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 56, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 57, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 58, wire `received_contact_card_type`
    pub received_contact_card_type: Option<String>,
    /// field 59, wire `received_contact_metadata_types`
    pub received_contact_metadata_types: Option<String>,
    /// field 60, wire `sticker_is_premium`
    pub sticker_is_premium: Option<bool>,
    /// field 61, wire `after_read_duration`
    pub after_read_duration: Option<i64>,
    /// field 62, wire `is_after_read`
    pub is_after_read: Option<bool>,
    /// field 63, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
    /// field 64, wire `sender_platform`
    pub sender_platform: Option<PLATFORMTYPE>,
    /// field 65, wire `opposite_has_username`
    pub opposite_has_username: Option<bool>,
    /// field 66, wire `is_sticker_annotation`
    pub is_sticker_annotation: Option<bool>,
}