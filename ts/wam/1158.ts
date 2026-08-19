export const WamDaily = 1158 as const

export interface DailyEvent {
  /** field 2, wire `sim_mcc` */
  simMcc?: number
  /** field 3, wire `sim_mnc` */
  simMnc?: number
  /** field 4, wire `os_build_number` */
  osBuildNumber?: string
  /** field 5, wire `language_code` */
  languageCode?: string
  /** field 6, wire `location_code` */
  locationCode?: string
  /** field 7, wire `network_is_roaming` */
  networkIsRoaming?: boolean
  /** field 8, wire `receipts_enabled` */
  receiptsEnabled?: boolean
  /** field 9, wire `backup_schedule` */
  backupSchedule?: BACKUPSCHEDULE
  /** field 10, wire `backup_network_setting` */
  backupNetworkSetting?: BACKUPNETWORKSETTING
  /** field 11, wire `addressbook_size` */
  addressbookSize?: number
  /** field 12, wire `addressbook_whatsapp_size` */
  addressbookWhatsappSize?: number
  /** field 19, wire `chat_database_size` */
  chatDatabaseSize?: number
  /** field 20, wire `media_folder_size` */
  mediaFolderSize?: number
  /** field 21, wire `media_folder_file_count` */
  mediaFolderFileCount?: number
  /** field 22, wire `video_folder_size` */
  videoFolderSize?: number
  /** field 23, wire `video_folder_file_count` */
  videoFolderFileCount?: number
  /** field 31, wire `storage_avail_size` */
  storageAvailSize?: number
  /** field 32, wire `storage_total_size` */
  storageTotalSize?: number
  /** field 53, wire `permission_read_external_storage` */
  permissionReadExternalStorage?: number
  /** field 55, wire `permission_record_audio` */
  permissionRecordAudio?: number
  /** field 56, wire `permission_camera` */
  permissionCamera?: number
  /** field 57, wire `permission_access_coarse_location` */
  permissionAccessCoarseLocation?: number
  /** field 58, wire `permission_access_fine_location` */
  permissionAccessFineLocation?: number
  /** field 63, wire `last_backup_timestamp` */
  lastBackupTimestamp?: number
  /** field 86, wire `auto_dl_image_wifi` */
  autoDlImageWifi?: boolean
  /** field 87, wire `auto_dl_image_cellular` */
  autoDlImageCellular?: boolean
  /** field 88, wire `auto_dl_image_roaming` */
  autoDlImageRoaming?: boolean
  /** field 89, wire `auto_dl_audio_wifi` */
  autoDlAudioWifi?: boolean
  /** field 90, wire `auto_dl_audio_cellular` */
  autoDlAudioCellular?: boolean
  /** field 91, wire `auto_dl_audio_roaming` */
  autoDlAudioRoaming?: boolean
  /** field 92, wire `auto_dl_video_wifi` */
  autoDlVideoWifi?: boolean
  /** field 93, wire `auto_dl_video_cellular` */
  autoDlVideoCellular?: boolean
  /** field 94, wire `auto_dl_video_roaming` */
  autoDlVideoRoaming?: boolean
  /** field 95, wire `auto_dl_doc_wifi` */
  autoDlDocWifi?: boolean
  /** field 96, wire `auto_dl_doc_cellular` */
  autoDlDocCellular?: boolean
  /** field 97, wire `auto_dl_doc_roaming` */
  autoDlDocRoaming?: boolean
  /** field 100, wire `payments_is_enabled` */
  paymentsIsEnabled?: boolean
  /** field 102, wire `package_name` */
  packageName?: string
  /** field 103, wire `app_code_hash` */
  appCodeHash?: string
  /** field 104, wire `permission_contacts` */
  permissionContacts?: boolean
  /** field 108, wire `accessibility_voiceover` */
  accessibilityVoiceover?: boolean
  /** field 111, wire `favorited_total_sticker_count` */
  favoritedTotalStickerCount?: number
  /** field 112, wire `favorited_first_party_sticker_count` */
  favoritedFirstPartyStickerCount?: number
  /** field 113, wire `favorited_animated_sticker_count` */
  favoritedAnimatedStickerCount?: number
  /** field 114, wire `installed_total_sticker_pack_count` */
  installedTotalStickerPackCount?: number
  /** field 115, wire `installed_first_party_sticker_pack_count` */
  installedFirstPartyStickerPackCount?: number
  /** field 116, wire `installed_animated_sticker_pack_count` */
  installedAnimatedStickerPackCount?: number
  /** field 118, wire `os_notification_setting` */
  osNotificationSetting?: NOTIFICATIONSETTINGTYPE
  /** field 121, wire `app_standby_bucket` */
  appStandbyBucket?: number
  /** field 124, wire `md_pair_time` */
  mdPairTime?: number
  /** field 134, wire `ent_security_notifications_enabled` */
  entSecurityNotificationsEnabled?: boolean
  /** field 135, wire `android_advertising_id` */
  androidAdvertisingId?: string
  /** field 136, wire `storage_avail_size_with_cache` */
  storageAvailSizeWithCache?: number
  /** field 137, wire `installed_animated_third_party_sticker_pack_count` */
  installedAnimatedThirdPartyStickerPackCount?: number
  /** field 138, wire `backup_restore_encryption_version` */
  backupRestoreEncryptionVersion?: number
  /** field 139, wire `android_keystore_state` */
  androidKeystoreState?: ANDROIDKEYSTORESTATETYPE
  /** field 140, wire `default_disappearing_duration` */
  defaultDisappearingDuration?: number
  /** field 141, wire `privacy_settings_about` */
  privacySettingsAbout?: PRIVACYSETTINGSVALUETYPE
  /** field 142, wire `privacy_settings_about_except_num` */
  privacySettingsAboutExceptNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 143, wire `privacy_settings_groups` */
  privacySettingsGroups?: PRIVACYSETTINGSVALUETYPE
  /** field 144, wire `privacy_settings_groups_except_num` */
  privacySettingsGroupsExceptNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 145, wire `privacy_settings_last_seen` */
  privacySettingsLastSeen?: PRIVACYSETTINGSVALUETYPE
  /** field 146, wire `privacy_settings_last_seen_except_num` */
  privacySettingsLastSeenExceptNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 147, wire `privacy_settings_profile_photo` */
  privacySettingsProfilePhoto?: PRIVACYSETTINGSVALUETYPE
  /** field 148, wire `privacy_settings_profile_photo_except_num` */
  privacySettingsProfilePhotoExceptNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 150, wire `privacy_settings_status` */
  privacySettingsStatus?: PRIVACYSETTINGSVALUETYPE
  /** field 151, wire `privacy_settings_status_except_num` */
  privacySettingsStatusExceptNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 152, wire `privacy_settings_status_share_num` */
  privacySettingsStatusShareNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 153, wire `device_language` */
  deviceLanguage?: string
  /** field 154, wire `keyboard_language` */
  keyboardLanguage?: string
  /** field 155, wire `modified_internal_props` */
  modifiedInternalProps?: boolean
  /** field 156, wire `phone_cores` */
  phoneCores?: number
  /** field 159, wire `network_operator_name` */
  networkOperatorName?: string
  /** field 160, wire `lowest_app_standby_bucket` */
  lowestAppStandbyBucket?: number
  /** field 162, wire `phoneyid` */
  phoneyid?: string
  /** field 163, wire `num_accounts` */
  numAccounts?: number
  /** field 164, wire `gallery_permission` */
  galleryPermission?: GALLERYPERMISSIONSTATE
  /** field 165, wire `passkey_exists` */
  passkeyExists?: boolean
  /** field 166, wire `experiment_tmo_preload_group_daily` */
  experimentTmoPreloadGroupDaily?: number
  /** field 168, wire `chat_lock_folder_count` */
  chatLockFolderCount?: number
  /** field 169, wire `supported_decoders` */
  supportedDecoders?: string
  /** field 170, wire `supported_encoders` */
  supportedEncoders?: string
  /** field 171, wire `lock_folder_hidden` */
  lockFolderHidden?: boolean
  /** field 172, wire `secret_code_active` */
  secretCodeActive?: boolean
  /** field 173, wire `show_meta_ai_button_setting` */
  showMetaAiButtonSetting?: boolean
  /** field 174, wire `email_state` */
  emailState?: EMAILSTATE
  /** field 175, wire `has_textstatus_emoji_modified24h` */
  hasTextstatusEmojiModified24h?: boolean
  /** field 176, wire `has_textstatus_modified24h` */
  hasTextstatusModified24h?: boolean
  /** field 177, wire `has_textstatus_text_modified24h` */
  hasTextstatusTextModified24h?: boolean
  /** field 178, wire `num_contacts_with_textstatus24h` */
  numContactsWithTextstatus24h?: number
  /** field 179, wire `num_contacts_with_textstatus_emoji24h` */
  numContactsWithTextstatusEmoji24h?: number
  /** field 180, wire `num_contacts_with_textstatus_text24h` */
  numContactsWithTextstatusText24h?: number
  /** field 181, wire `count_ephemeral_threads` */
  countEphemeralThreads?: number
  /** field 182, wire `count_ephemeral_threads_enabled_by_me` */
  countEphemeralThreadsEnabledByMe?: number
  /** field 183, wire `is_default_disappearing_messaging_user` */
  isDefaultDisappearingMessagingUser?: boolean
  /** field 184, wire `is_ephemeral_messaging_user` */
  isEphemeralMessagingUser?: boolean
  /** field 185, wire `last_cloud_backup_size` */
  lastCloudBackupSize?: number
  /** field 186, wire `channels_media_folder_size` */
  channelsMediaFolderSize?: number
  /** field 187, wire `has_username` */
  hasUsername?: boolean
  /** field 188, wire `media_quality_setting` */
  mediaQualitySetting?: MEDIAQUALITY
  /** field 190, wire `in_network_contacts_size` */
  inNetworkContactsSize?: number
  /** field 191, wire `out_of_network_contacts_size` */
  outOfNetworkContactsSize?: number
  /** field 192, wire `synced_in_network_contacts_size` */
  syncedInNetworkContactsSize?: number
  /** field 193, wire `total_count_in_network_unique_phone_number` */
  totalCountInNetworkUniquePhoneNumber?: number
  /** field 194, wire `total_count_synced_in_network_unique_phone_number` */
  totalCountSyncedInNetworkUniquePhoneNumber?: number
  /** field 195, wire `is_profile_photo_set` */
  isProfilePhotoSet?: boolean
  /** field 198, wire `meta_ai_model_actual` */
  metaAiModelActual?: METAAIMODELTIERTYPE
  /** field 199, wire `meta_ai_model_selected` */
  metaAiModelSelected?: METAAIMODELTIERTYPE
  /** field 200, wire `contacts_created_on_whatsapp_size` */
  contactsCreatedOnWhatsappSize?: number
  /** field 201, wire `contacts_permission_authorization_status` */
  contactsPermissionAuthorizationStatus?: CONTACTSPERMISSIONAUTHORIZATIONSTATUSTYPE
  /** field 202, wire `is_contact_sync_to_os_default_on` */
  isContactSyncToOsDefaultOn?: boolean
  /** field 205, wire `native_contacts_global_setting_enabled` */
  nativeContactsGlobalSettingEnabled?: boolean
  /** field 206, wire `db_addressbook_table_size` */
  dbAddressbookTableSize?: number
  /** field 207, wire `webc_contacts_table_size` */
  webcContactsTableSize?: number
  /** field 208, wire `webc_filtered_contacts_size` */
  webcFilteredContactsSize?: number
  /** field 209, wire `peripheral_connected` */
  peripheralConnected?: string
  /** field 210, wire `ai_widget_installed` */
  aiWidgetInstalled?: boolean
  /** field 211, wire `profile_links_count` */
  profileLinksCount?: number
  /** field 212, wire `app_last_open_timestamp` */
  appLastOpenTimestamp?: number
  /** field 213, wire `unread_badge_frequency` */
  unreadBadgeFrequency?: number
  /** field 214, wire `defense_mode` */
  defenseMode?: number
  /** field 215, wire `traffic_anonymization` */
  trafficAnonymization?: number
  /** field 216, wire `count1on1_threads` */
  count1on1Threads?: number
  /** field 217, wire `count_group_threads` */
  countGroupThreads?: number
  /** field 218, wire `count_limit_sharing1on1_threads` */
  countLimitSharing1on1Threads?: number
  /** field 219, wire `count_limit_sharing_group_threads` */
  countLimitSharingGroupThreads?: number
  /** field 220, wire `meta_ai_voice_default_on` */
  metaAiVoiceDefaultOn?: boolean
  /** field 221, wire `meta_ai_voice_selection` */
  metaAiVoiceSelection?: string
  /** field 222, wire `has_username_pin` */
  hasUsernamePin?: boolean
  /** field 223, wire `ai_memory_saved_cnt` */
  aiMemorySavedCnt?: number
  /** field 224, wire `preloads_app_manager_id` */
  preloadsAppManagerId?: string
  /** field 225, wire `privacy_settings_profile_links` */
  privacySettingsProfileLinks?: PRIVACYSETTINGSVALUETYPE
  /** field 226, wire `privacy_settings_profile_links_except_num` */
  privacySettingsProfileLinksExceptNum?: PRIVACYSETTINGSCONTACTSBUCKETS
  /** field 227, wire `preloads_attribution_json` */
  preloadsAttributionJson?: string
  /** field 228, wire `deprecated_contacts_size` */
  deprecatedContactsSize?: number
  /** field 229, wire `peripheral_linked_product_line` */
  peripheralLinkedProductLine?: string
  /** field 231, wire `backup_encryption_method` */
  backupEncryptionMethod?: BACKUPENCRYPTIONMETHOD
  /** field 232, wire `total_missed_calls` */
  totalMissedCalls?: number
  /** field 233, wire `total_unread_messages` */
  totalUnreadMessages?: number
  /** field 234, wire `is_canonical_ent_present` */
  isCanonicalEntPresent?: boolean
  /** field 235, wire `privacy_settings_cover_photo` */
  privacySettingsCoverPhoto?: PRIVACYSETTINGSVALUETYPE
  /** field 236, wire `unique_phone_number_contacts_size_with_username` */
  uniquePhoneNumberContactsSizeWithUsername?: number
  /** field 237, wire `username_only_contacts_size` */
  usernameOnlyContactsSize?: number
  /** field 238, wire `contacts_requiring_sync_before_display_size` */
  contactsRequiringSyncBeforeDisplaySize?: number
  /** field 239, wire `media_size_cache_age_seconds` */
  mediaSizeCacheAgeSeconds?: number
  /** field 240, wire `trace_id_int` */
  traceIdInt?: number
  /** field 241, wire `canonical_ent_last_validation_ts_ms` */
  canonicalEntLastValidationTsMs?: number
  /** field 242, wire `username_state` */
  usernameState?: USERNAMESTATE
  /** field 243, wire `sim_phone_number_matched` */
  simPhoneNumberMatched?: number
  /** field 244, wire `media_auto_download_quality_setting` */
  mediaAutoDownloadQualitySetting?: MEDIAAUTODOWNLOADQUALITY
  /** field 245, wire `unverified_profile_links_count` */
  unverifiedProfileLinksCount?: number
  /** field 246, wire `verified_profile_links_count` */
  verifiedProfileLinksCount?: number
  /** field 247, wire `daily_passkey_count` */
  dailyPasskeyCount?: number
  /** field 248, wire `default_after_read_duration` */
  defaultAfterReadDuration?: number
  /** field 249, wire `default_after_read_enabled` */
  defaultAfterReadEnabled?: boolean
  /** field 250, wire `number_of_sim` */
  numberOfSim?: number
  /** field 251, wire `phone_number_hint_available_count` */
  phoneNumberHintAvailableCount?: number
  /** field 253, wire `lid_to_pn_mapping_count` */
  lidToPnMappingCount?: number
  /** field 254, wire `lid_to_username_mapping_count` */
  lidToUsernameMappingCount?: number
  /** field 255, wire `peripheral_display_connectivity_type` */
  peripheralDisplayConnectivityType?: PERIPHERALDISPLAYCONNECTIVITYTYPE
  /** field 256, wire `stickers_folder_file_count` */
  stickersFolderFileCount?: number
  /** field 257, wire `stickers_folder_size` */
  stickersFolderSize?: number
  /** field 258, wire `lid_raw_contact_id` */
  lidRawContactId?: number
  /** field 259, wire `text_message_animation_enabled` */
  textMessageAnimationEnabled?: boolean
  /** field 260, wire `interop_contacts_size` */
  interopContactsSize?: number
  /** field 261, wire `interop_contacts_size_per_integrator` */
  interopContactsSizePerIntegrator?: string
}