const WamOtpRetriever = 3468 // channel: private

type OtpRetrieverEvent struct {
	BusinessPhoneNumber int64 `wam:"business_phone_number"` // field 1
	CtaFallbackReason CTAFALLBACKREASON `wam:"cta_fallback_reason"` // field 2
	CtaType CTATYPE `wam:"cta_type"` // field 3
	OtpEventSource OTPEVENTSOURCE `wam:"otp_event_source"` // field 5
	OtpEventType OTPEVENTTYPE `wam:"otp_event_type"` // field 6
	OtpProductType OTPPRODUCTTYPE `wam:"otp_product_type"` // field 7
	OtpSessionId string `wam:"otp_session_id"` // field 8
	ThirdPartyPackageNameFromIntent string `wam:"third_party_package_name_from_intent"` // field 9
	ThirdPartyPackageSignatureHash string `wam:"third_party_package_signature_hash"` // field 10
	MessageReceivedElapsedTimeSeconds int64 `wam:"message_received_elapsed_time_seconds"` // field 11
	ChatsFolderType CHATSFOLDERTYPE `wam:"chats_folder_type"` // field 12
	IsKeepChatsArchivedEnabled bool `wam:"is_keep_chats_archived_enabled"` // field 13
	IsMessageNotificationEnabled bool `wam:"is_message_notification_enabled"` // field 14
	IsNotificationEnabled bool `wam:"is_notification_enabled"` // field 15
	OtpFailureReason string `wam:"otp_failure_reason"` // field 16
	TemplateId string `wam:"template_id"` // field 17
	ReceiverCountryCode string `wam:"receiver_country_code"` // field 18
	ChatId string `wam:"chat_id"` // field 19
	OtpCorrelationId string `wam:"otp_correlation_id"` // field 20
	OtpHandshakeElapsedTimeMs int64 `wam:"otp_handshake_elapsed_time_ms"` // field 21
	OtpSdkVersion string `wam:"otp_sdk_version"` // field 22
	OtpHandshakeId string `wam:"otp_handshake_id"` // field 23
	OtpMaskLinkedDevices bool `wam:"otp_mask_linked_devices"` // field 24
	WaDeviceId int64 `wam:"wa_device_id"` // field 25
	BusinessLid int64 `wam:"business_lid"` // field 26
	OtpSenderAttributes string `wam:"otp_sender_attributes"` // field 27
	BusinessLidOrJid string `wam:"business_lid_or_jid"` // field 28
	OtpIosAutofillDisabled bool `wam:"otp_ios_autofill_disabled"` // field 29
}