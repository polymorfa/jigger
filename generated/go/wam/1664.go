const WamWebcLogin = 1664 // channel: regular

type WebcLoginEvent struct {
	WebcQrCodes int64 `wam:"webc_qr_codes"` // field 1
	WebcQrLoadT string `wam:"webc_qr_load_t"` // field 2
	WebcLoginT string `wam:"webc_login_t"` // field 3
	WebcSyncT string `wam:"webc_sync_t"` // field 4
	WebcSyncMessageCount int64 `wam:"webc_sync_message_count"` // field 5
	WebcSyncMessageT string `wam:"webc_sync_message_t"` // field 6
	WebcSyncMessageSize int64 `wam:"webc_sync_message_size"` // field 7
	WebcSyncChatCount int64 `wam:"webc_sync_chat_count"` // field 8
	WebcSyncChatT string `wam:"webc_sync_chat_t"` // field 9
	WebcSyncChatSize int64 `wam:"webc_sync_chat_size"` // field 10
	WebcSyncContactCount int64 `wam:"webc_sync_contact_count"` // field 11
	WebcSyncContactT string `wam:"webc_sync_contact_t"` // field 12
	WebcSyncContactSize int64 `wam:"webc_sync_contact_size"` // field 13
	WebcBrowserNetworkType string `wam:"webc_browser_network_type"` // field 14
	WebcBrowserStorageQuotaBytes int64 `wam:"webc_browser_storage_quota_bytes"` // field 15
	WebcBrowserStorageQuotaUsedBytes int64 `wam:"webc_browser_storage_quota_used_bytes"` // field 16
	WebcPersistentLoginEnabled bool `wam:"webc_persistent_login_enabled"` // field 17
}