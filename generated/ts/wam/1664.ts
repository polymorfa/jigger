export const WamWebcLogin = 1664 as const

export interface WebcLoginEvent {
  /** field 1, wire `webc_qr_codes` */
  webcQrCodes?: number
  /** field 2, wire `webc_qr_load_t` */
  webcQrLoadT?: string
  /** field 3, wire `webc_login_t` */
  webcLoginT?: string
  /** field 4, wire `webc_sync_t` */
  webcSyncT?: string
  /** field 5, wire `webc_sync_message_count` */
  webcSyncMessageCount?: number
  /** field 6, wire `webc_sync_message_t` */
  webcSyncMessageT?: string
  /** field 7, wire `webc_sync_message_size` */
  webcSyncMessageSize?: number
  /** field 8, wire `webc_sync_chat_count` */
  webcSyncChatCount?: number
  /** field 9, wire `webc_sync_chat_t` */
  webcSyncChatT?: string
  /** field 10, wire `webc_sync_chat_size` */
  webcSyncChatSize?: number
  /** field 11, wire `webc_sync_contact_count` */
  webcSyncContactCount?: number
  /** field 12, wire `webc_sync_contact_t` */
  webcSyncContactT?: string
  /** field 13, wire `webc_sync_contact_size` */
  webcSyncContactSize?: number
  /** field 14, wire `webc_browser_network_type` */
  webcBrowserNetworkType?: string
  /** field 15, wire `webc_browser_storage_quota_bytes` */
  webcBrowserStorageQuotaBytes?: number
  /** field 16, wire `webc_browser_storage_quota_used_bytes` */
  webcBrowserStorageQuotaUsedBytes?: number
  /** field 17, wire `webc_persistent_login_enabled` */
  webcPersistentLoginEnabled?: boolean
}