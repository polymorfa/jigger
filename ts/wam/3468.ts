export const WamOtpRetriever = 3468 as const

export interface OtpRetrieverEvent {
  /** field 1, wire `business_phone_number` */
  businessPhoneNumber?: number
  /** field 2, wire `cta_fallback_reason` */
  ctaFallbackReason?: CTAFALLBACKREASON
  /** field 3, wire `cta_type` */
  ctaType?: CTATYPE
  /** field 5, wire `otp_event_source` */
  otpEventSource?: OTPEVENTSOURCE
  /** field 6, wire `otp_event_type` */
  otpEventType?: OTPEVENTTYPE
  /** field 7, wire `otp_product_type` */
  otpProductType?: OTPPRODUCTTYPE
  /** field 8, wire `otp_session_id` */
  otpSessionId?: string
  /** field 9, wire `third_party_package_name_from_intent` */
  thirdPartyPackageNameFromIntent?: string
  /** field 10, wire `third_party_package_signature_hash` */
  thirdPartyPackageSignatureHash?: string
  /** field 11, wire `message_received_elapsed_time_seconds` */
  messageReceivedElapsedTimeSeconds?: number
  /** field 12, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 13, wire `is_keep_chats_archived_enabled` */
  isKeepChatsArchivedEnabled?: boolean
  /** field 14, wire `is_message_notification_enabled` */
  isMessageNotificationEnabled?: boolean
  /** field 15, wire `is_notification_enabled` */
  isNotificationEnabled?: boolean
  /** field 16, wire `otp_failure_reason` */
  otpFailureReason?: string
  /** field 17, wire `template_id` */
  templateId?: string
  /** field 18, wire `receiver_country_code` */
  receiverCountryCode?: string
  /** field 19, wire `chat_id` */
  chatId?: string
  /** field 20, wire `otp_correlation_id` */
  otpCorrelationId?: string
  /** field 21, wire `otp_handshake_elapsed_time_ms` */
  otpHandshakeElapsedTimeMs?: number
  /** field 22, wire `otp_sdk_version` */
  otpSdkVersion?: string
  /** field 23, wire `otp_handshake_id` */
  otpHandshakeId?: string
  /** field 24, wire `otp_mask_linked_devices` */
  otpMaskLinkedDevices?: boolean
  /** field 25, wire `wa_device_id` */
  waDeviceId?: number
  /** field 26, wire `business_lid` */
  businessLid?: number
  /** field 27, wire `otp_sender_attributes` */
  otpSenderAttributes?: string
  /** field 28, wire `business_lid_or_jid` */
  businessLidOrJid?: string
  /** field 29, wire `otp_ios_autofill_disabled` */
  otpIosAutofillDisabled?: boolean
}