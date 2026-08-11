pub const WAM_DAILY: u32 = 1158;

#[derive(Debug, Default)]
pub struct DailyEvent {
    /// field 2, wire `sim_mcc`
    pub sim_mcc: Option<i64>,
    /// field 3, wire `sim_mnc`
    pub sim_mnc: Option<i64>,
    /// field 4, wire `os_build_number`
    pub os_build_number: Option<String>,
    /// field 5, wire `language_code`
    pub language_code: Option<String>,
    /// field 6, wire `location_code`
    pub location_code: Option<String>,
    /// field 7, wire `network_is_roaming`
    pub network_is_roaming: Option<bool>,
    /// field 8, wire `receipts_enabled`
    pub receipts_enabled: Option<bool>,
    /// field 9, wire `backup_schedule`
    pub backup_schedule: Option<BACKUPSCHEDULE>,
    /// field 10, wire `backup_network_setting`
    pub backup_network_setting: Option<BACKUPNETWORKSETTING>,
    /// field 11, wire `addressbook_size`
    pub addressbook_size: Option<i64>,
    /// field 12, wire `addressbook_whatsapp_size`
    pub addressbook_whatsapp_size: Option<i64>,
    /// field 19, wire `chat_database_size`
    pub chat_database_size: Option<i64>,
    /// field 20, wire `media_folder_size`
    pub media_folder_size: Option<i64>,
    /// field 21, wire `media_folder_file_count`
    pub media_folder_file_count: Option<i64>,
    /// field 22, wire `video_folder_size`
    pub video_folder_size: Option<i64>,
    /// field 23, wire `video_folder_file_count`
    pub video_folder_file_count: Option<i64>,
    /// field 31, wire `storage_avail_size`
    pub storage_avail_size: Option<i64>,
    /// field 32, wire `storage_total_size`
    pub storage_total_size: Option<i64>,
    /// field 53, wire `permission_read_external_storage`
    pub permission_read_external_storage: Option<i64>,
    /// field 55, wire `permission_record_audio`
    pub permission_record_audio: Option<i64>,
    /// field 56, wire `permission_camera`
    pub permission_camera: Option<i64>,
    /// field 57, wire `permission_access_coarse_location`
    pub permission_access_coarse_location: Option<i64>,
    /// field 58, wire `permission_access_fine_location`
    pub permission_access_fine_location: Option<i64>,
    /// field 63, wire `last_backup_timestamp`
    pub last_backup_timestamp: Option<i64>,
    /// field 86, wire `auto_dl_image_wifi`
    pub auto_dl_image_wifi: Option<bool>,
    /// field 87, wire `auto_dl_image_cellular`
    pub auto_dl_image_cellular: Option<bool>,
    /// field 88, wire `auto_dl_image_roaming`
    pub auto_dl_image_roaming: Option<bool>,
    /// field 89, wire `auto_dl_audio_wifi`
    pub auto_dl_audio_wifi: Option<bool>,
    /// field 90, wire `auto_dl_audio_cellular`
    pub auto_dl_audio_cellular: Option<bool>,
    /// field 91, wire `auto_dl_audio_roaming`
    pub auto_dl_audio_roaming: Option<bool>,
    /// field 92, wire `auto_dl_video_wifi`
    pub auto_dl_video_wifi: Option<bool>,
    /// field 93, wire `auto_dl_video_cellular`
    pub auto_dl_video_cellular: Option<bool>,
    /// field 94, wire `auto_dl_video_roaming`
    pub auto_dl_video_roaming: Option<bool>,
    /// field 95, wire `auto_dl_doc_wifi`
    pub auto_dl_doc_wifi: Option<bool>,
    /// field 96, wire `auto_dl_doc_cellular`
    pub auto_dl_doc_cellular: Option<bool>,
    /// field 97, wire `auto_dl_doc_roaming`
    pub auto_dl_doc_roaming: Option<bool>,
    /// field 100, wire `payments_is_enabled`
    pub payments_is_enabled: Option<bool>,
    /// field 102, wire `package_name`
    pub package_name: Option<String>,
    /// field 103, wire `app_code_hash`
    pub app_code_hash: Option<String>,
    /// field 104, wire `permission_contacts`
    pub permission_contacts: Option<bool>,
    /// field 108, wire `accessibility_voiceover`
    pub accessibility_voiceover: Option<bool>,
    /// field 111, wire `favorited_total_sticker_count`
    pub favorited_total_sticker_count: Option<i64>,
    /// field 112, wire `favorited_first_party_sticker_count`
    pub favorited_first_party_sticker_count: Option<i64>,
    /// field 113, wire `favorited_animated_sticker_count`
    pub favorited_animated_sticker_count: Option<i64>,
    /// field 114, wire `installed_total_sticker_pack_count`
    pub installed_total_sticker_pack_count: Option<i64>,
    /// field 115, wire `installed_first_party_sticker_pack_count`
    pub installed_first_party_sticker_pack_count: Option<i64>,
    /// field 116, wire `installed_animated_sticker_pack_count`
    pub installed_animated_sticker_pack_count: Option<i64>,
    /// field 118, wire `os_notification_setting`
    pub os_notification_setting: Option<NOTIFICATIONSETTINGTYPE>,
    /// field 121, wire `app_standby_bucket`
    pub app_standby_bucket: Option<i64>,
    /// field 124, wire `md_pair_time`
    pub md_pair_time: Option<i64>,
    /// field 134, wire `ent_security_notifications_enabled`
    pub ent_security_notifications_enabled: Option<bool>,
    /// field 135, wire `android_advertising_id`
    pub android_advertising_id: Option<String>,
    /// field 136, wire `storage_avail_size_with_cache`
    pub storage_avail_size_with_cache: Option<i64>,
    /// field 137, wire `installed_animated_third_party_sticker_pack_count`
    pub installed_animated_third_party_sticker_pack_count: Option<i64>,
    /// field 138, wire `backup_restore_encryption_version`
    pub backup_restore_encryption_version: Option<i64>,
    /// field 139, wire `android_keystore_state`
    pub android_keystore_state: Option<ANDROIDKEYSTORESTATETYPE>,
    /// field 140, wire `default_disappearing_duration`
    pub default_disappearing_duration: Option<i64>,
    /// field 141, wire `privacy_settings_about`
    pub privacy_settings_about: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 142, wire `privacy_settings_about_except_num`
    pub privacy_settings_about_except_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 143, wire `privacy_settings_groups`
    pub privacy_settings_groups: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 144, wire `privacy_settings_groups_except_num`
    pub privacy_settings_groups_except_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 145, wire `privacy_settings_last_seen`
    pub privacy_settings_last_seen: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 146, wire `privacy_settings_last_seen_except_num`
    pub privacy_settings_last_seen_except_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 147, wire `privacy_settings_profile_photo`
    pub privacy_settings_profile_photo: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 148, wire `privacy_settings_profile_photo_except_num`
    pub privacy_settings_profile_photo_except_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 150, wire `privacy_settings_status`
    pub privacy_settings_status: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 151, wire `privacy_settings_status_except_num`
    pub privacy_settings_status_except_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 152, wire `privacy_settings_status_share_num`
    pub privacy_settings_status_share_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 153, wire `device_language`
    pub device_language: Option<String>,
    /// field 154, wire `keyboard_language`
    pub keyboard_language: Option<String>,
    /// field 155, wire `modified_internal_props`
    pub modified_internal_props: Option<bool>,
    /// field 156, wire `phone_cores`
    pub phone_cores: Option<i64>,
    /// field 159, wire `network_operator_name`
    pub network_operator_name: Option<String>,
    /// field 160, wire `lowest_app_standby_bucket`
    pub lowest_app_standby_bucket: Option<i64>,
    /// field 162, wire `phoneyid`
    pub phoneyid: Option<String>,
    /// field 163, wire `num_accounts`
    pub num_accounts: Option<i64>,
    /// field 164, wire `gallery_permission`
    pub gallery_permission: Option<GALLERYPERMISSIONSTATE>,
    /// field 165, wire `passkey_exists`
    pub passkey_exists: Option<bool>,
    /// field 166, wire `experiment_tmo_preload_group_daily`
    pub experiment_tmo_preload_group_daily: Option<i64>,
    /// field 168, wire `chat_lock_folder_count`
    pub chat_lock_folder_count: Option<i64>,
    /// field 169, wire `supported_decoders`
    pub supported_decoders: Option<String>,
    /// field 170, wire `supported_encoders`
    pub supported_encoders: Option<String>,
    /// field 171, wire `lock_folder_hidden`
    pub lock_folder_hidden: Option<bool>,
    /// field 172, wire `secret_code_active`
    pub secret_code_active: Option<bool>,
    /// field 173, wire `show_meta_ai_button_setting`
    pub show_meta_ai_button_setting: Option<bool>,
    /// field 174, wire `email_state`
    pub email_state: Option<EMAILSTATE>,
    /// field 175, wire `has_textstatus_emoji_modified24h`
    pub has_textstatus_emoji_modified24h: Option<bool>,
    /// field 176, wire `has_textstatus_modified24h`
    pub has_textstatus_modified24h: Option<bool>,
    /// field 177, wire `has_textstatus_text_modified24h`
    pub has_textstatus_text_modified24h: Option<bool>,
    /// field 178, wire `num_contacts_with_textstatus24h`
    pub num_contacts_with_textstatus24h: Option<i64>,
    /// field 179, wire `num_contacts_with_textstatus_emoji24h`
    pub num_contacts_with_textstatus_emoji24h: Option<i64>,
    /// field 180, wire `num_contacts_with_textstatus_text24h`
    pub num_contacts_with_textstatus_text24h: Option<i64>,
    /// field 181, wire `count_ephemeral_threads`
    pub count_ephemeral_threads: Option<i64>,
    /// field 182, wire `count_ephemeral_threads_enabled_by_me`
    pub count_ephemeral_threads_enabled_by_me: Option<i64>,
    /// field 183, wire `is_default_disappearing_messaging_user`
    pub is_default_disappearing_messaging_user: Option<bool>,
    /// field 184, wire `is_ephemeral_messaging_user`
    pub is_ephemeral_messaging_user: Option<bool>,
    /// field 185, wire `last_cloud_backup_size`
    pub last_cloud_backup_size: Option<i64>,
    /// field 186, wire `channels_media_folder_size`
    pub channels_media_folder_size: Option<i64>,
    /// field 187, wire `has_username`
    pub has_username: Option<bool>,
    /// field 188, wire `media_quality_setting`
    pub media_quality_setting: Option<MEDIAQUALITY>,
    /// field 190, wire `in_network_contacts_size`
    pub in_network_contacts_size: Option<i64>,
    /// field 191, wire `out_of_network_contacts_size`
    pub out_of_network_contacts_size: Option<i64>,
    /// field 192, wire `synced_in_network_contacts_size`
    pub synced_in_network_contacts_size: Option<i64>,
    /// field 193, wire `total_count_in_network_unique_phone_number`
    pub total_count_in_network_unique_phone_number: Option<i64>,
    /// field 194, wire `total_count_synced_in_network_unique_phone_number`
    pub total_count_synced_in_network_unique_phone_number: Option<i64>,
    /// field 195, wire `is_profile_photo_set`
    pub is_profile_photo_set: Option<bool>,
    /// field 198, wire `meta_ai_model_actual`
    pub meta_ai_model_actual: Option<METAAIMODELTIERTYPE>,
    /// field 199, wire `meta_ai_model_selected`
    pub meta_ai_model_selected: Option<METAAIMODELTIERTYPE>,
    /// field 200, wire `contacts_created_on_whatsapp_size`
    pub contacts_created_on_whatsapp_size: Option<i64>,
    /// field 201, wire `contacts_permission_authorization_status`
    pub contacts_permission_authorization_status: Option<CONTACTSPERMISSIONAUTHORIZATIONSTATUSTYPE>,
    /// field 202, wire `is_contact_sync_to_os_default_on`
    pub is_contact_sync_to_os_default_on: Option<bool>,
    /// field 205, wire `native_contacts_global_setting_enabled`
    pub native_contacts_global_setting_enabled: Option<bool>,
    /// field 206, wire `db_addressbook_table_size`
    pub db_addressbook_table_size: Option<i64>,
    /// field 207, wire `webc_contacts_table_size`
    pub webc_contacts_table_size: Option<i64>,
    /// field 208, wire `webc_filtered_contacts_size`
    pub webc_filtered_contacts_size: Option<i64>,
    /// field 209, wire `peripheral_connected`
    pub peripheral_connected: Option<String>,
    /// field 210, wire `ai_widget_installed`
    pub ai_widget_installed: Option<bool>,
    /// field 211, wire `profile_links_count`
    pub profile_links_count: Option<i64>,
    /// field 212, wire `app_last_open_timestamp`
    pub app_last_open_timestamp: Option<i64>,
    /// field 213, wire `unread_badge_frequency`
    pub unread_badge_frequency: Option<i64>,
    /// field 214, wire `defense_mode`
    pub defense_mode: Option<i64>,
    /// field 215, wire `traffic_anonymization`
    pub traffic_anonymization: Option<i64>,
    /// field 216, wire `count1on1_threads`
    pub count1on1_threads: Option<i64>,
    /// field 217, wire `count_group_threads`
    pub count_group_threads: Option<i64>,
    /// field 218, wire `count_limit_sharing1on1_threads`
    pub count_limit_sharing1on1_threads: Option<i64>,
    /// field 219, wire `count_limit_sharing_group_threads`
    pub count_limit_sharing_group_threads: Option<i64>,
    /// field 220, wire `meta_ai_voice_default_on`
    pub meta_ai_voice_default_on: Option<bool>,
    /// field 221, wire `meta_ai_voice_selection`
    pub meta_ai_voice_selection: Option<String>,
    /// field 222, wire `has_username_pin`
    pub has_username_pin: Option<bool>,
    /// field 223, wire `ai_memory_saved_cnt`
    pub ai_memory_saved_cnt: Option<i64>,
    /// field 224, wire `preloads_app_manager_id`
    pub preloads_app_manager_id: Option<String>,
    /// field 225, wire `privacy_settings_profile_links`
    pub privacy_settings_profile_links: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 226, wire `privacy_settings_profile_links_except_num`
    pub privacy_settings_profile_links_except_num: Option<PRIVACYSETTINGSCONTACTSBUCKETS>,
    /// field 227, wire `preloads_attribution_json`
    pub preloads_attribution_json: Option<String>,
    /// field 228, wire `deprecated_contacts_size`
    pub deprecated_contacts_size: Option<i64>,
    /// field 229, wire `peripheral_linked_product_line`
    pub peripheral_linked_product_line: Option<String>,
    /// field 231, wire `backup_encryption_method`
    pub backup_encryption_method: Option<BACKUPENCRYPTIONMETHOD>,
    /// field 232, wire `total_missed_calls`
    pub total_missed_calls: Option<i64>,
    /// field 233, wire `total_unread_messages`
    pub total_unread_messages: Option<i64>,
    /// field 234, wire `is_canonical_ent_present`
    pub is_canonical_ent_present: Option<bool>,
    /// field 235, wire `privacy_settings_cover_photo`
    pub privacy_settings_cover_photo: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 236, wire `unique_phone_number_contacts_size_with_username`
    pub unique_phone_number_contacts_size_with_username: Option<i64>,
    /// field 237, wire `username_only_contacts_size`
    pub username_only_contacts_size: Option<i64>,
    /// field 238, wire `contacts_requiring_sync_before_display_size`
    pub contacts_requiring_sync_before_display_size: Option<i64>,
    /// field 239, wire `media_size_cache_age_seconds`
    pub media_size_cache_age_seconds: Option<i64>,
    /// field 240, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 241, wire `canonical_ent_last_validation_ts_ms`
    pub canonical_ent_last_validation_ts_ms: Option<i64>,
    /// field 242, wire `username_state`
    pub username_state: Option<USERNAMESTATE>,
    /// field 243, wire `sim_phone_number_matched`
    pub sim_phone_number_matched: Option<i64>,
    /// field 244, wire `media_auto_download_quality_setting`
    pub media_auto_download_quality_setting: Option<MEDIAAUTODOWNLOADQUALITY>,
    /// field 245, wire `unverified_profile_links_count`
    pub unverified_profile_links_count: Option<i64>,
    /// field 246, wire `verified_profile_links_count`
    pub verified_profile_links_count: Option<i64>,
    /// field 247, wire `daily_passkey_count`
    pub daily_passkey_count: Option<i64>,
    /// field 248, wire `default_after_read_duration`
    pub default_after_read_duration: Option<i64>,
    /// field 249, wire `default_after_read_enabled`
    pub default_after_read_enabled: Option<bool>,
    /// field 250, wire `number_of_sim`
    pub number_of_sim: Option<i64>,
    /// field 251, wire `phone_number_hint_available_count`
    pub phone_number_hint_available_count: Option<i64>,
    /// field 253, wire `lid_to_pn_mapping_count`
    pub lid_to_pn_mapping_count: Option<i64>,
    /// field 254, wire `lid_to_username_mapping_count`
    pub lid_to_username_mapping_count: Option<i64>,
    /// field 255, wire `peripheral_display_connectivity_type`
    pub peripheral_display_connectivity_type: Option<PERIPHERALDISPLAYCONNECTIVITYTYPE>,
    /// field 256, wire `stickers_folder_file_count`
    pub stickers_folder_file_count: Option<i64>,
    /// field 257, wire `stickers_folder_size`
    pub stickers_folder_size: Option<i64>,
    /// field 258, wire `lid_raw_contact_id`
    pub lid_raw_contact_id: Option<i64>,
    /// field 259, wire `text_message_animation_enabled`
    pub text_message_animation_enabled: Option<bool>,
    /// field 260, wire `interop_contacts_size`
    pub interop_contacts_size: Option<i64>,
    /// field 261, wire `interop_contacts_size_per_integrator`
    pub interop_contacts_size_per_integrator: Option<String>,
}