const WamWebcMediaRmr = 1906 // channel: regular

type WebcMediaRmrEvent struct {
	WebcChatPosition int64 `wam:"webc_chat_position"` // field 1
	WebcBrowserNetworkType string `wam:"webc_browser_network_type"` // field 2
	WebcMessageIndex int64 `wam:"webc_message_index"` // field 3
	WebcMessageT string `wam:"webc_message_t"` // field 5
	WebcMediaRmrT string `wam:"webc_media_rmr_t"` // field 6
	WebcMediaSize int64 `wam:"webc_media_size"` // field 7
	WebcMediaRmrError bool `wam:"webc_media_rmr_error"` // field 8
	WebcChatType WEBCCHATTYPE `wam:"webc_chat_type"` // field 9
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 10
	WebcBrowserStorageQuotaBytes int64 `wam:"webc_browser_storage_quota_bytes"` // field 11
	WebcBrowserStorageQuotaUsedBytes int64 `wam:"webc_browser_storage_quota_used_bytes"` // field 12
	WebcRmrStatusCode int64 `wam:"webc_rmr_status_code"` // field 13
	WebcRmrReason WEBCRMRREASONCODE `wam:"webc_rmr_reason"` // field 14
}