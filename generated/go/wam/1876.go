const WamWebcMessageQuery = 1876 // channel: regular

type WebcMessageQueryEvent struct {
	WebcBrowserNetworkType string `wam:"webc_browser_network_type"` // field 1
	WebcChatPosition int64 `wam:"webc_chat_position"` // field 2
	WebcMessageQueryType WEBCMESSAGEQUERYDIRECTION `wam:"webc_message_query_type"` // field 3
	WebcMessageCount int64 `wam:"webc_message_count"` // field 4
	WebcTextMessageCount int64 `wam:"webc_text_message_count"` // field 5
	WebcVideoMessageCount int64 `wam:"webc_video_message_count"` // field 6
	WebcPhotoMessageCount int64 `wam:"webc_photo_message_count"` // field 7
	WebcQueryT string `wam:"webc_query_t"` // field 9
	WebcResponseBytes int64 `wam:"webc_response_bytes"` // field 10
	WebcEarliestMessageIndex int64 `wam:"webc_earliest_message_index"` // field 11
	WebcEarliestMessageT string `wam:"webc_earliest_message_t"` // field 12
	WebcChatType WEBCCHATTYPE `wam:"webc_chat_type"` // field 13
	WebcAudioMessageCount int64 `wam:"webc_audio_message_count"` // field 14
	WebcPttMessageCount int64 `wam:"webc_ptt_message_count"` // field 15
	WebcDocumentMessageCount int64 `wam:"webc_document_message_count"` // field 16
	WebcStickerMessageCount int64 `wam:"webc_sticker_message_count"` // field 17
	WebcOtherMessageCount int64 `wam:"webc_other_message_count"` // field 18
	WebcMessageQueryTrigger WEBCQUERYTRIGGERTYPE `wam:"webc_message_query_trigger"` // field 19
	WebcBrowserStorageQuotaBytes int64 `wam:"webc_browser_storage_quota_bytes"` // field 20
	WebcBrowserStorageQuotaUsedBytes int64 `wam:"webc_browser_storage_quota_used_bytes"` // field 21
}