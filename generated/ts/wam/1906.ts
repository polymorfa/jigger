export const WamWebcMediaRmr = 1906 as const

export interface WebcMediaRmrEvent {
  /** field 1, wire `webc_chat_position` */
  webcChatPosition?: number
  /** field 2, wire `webc_browser_network_type` */
  webcBrowserNetworkType?: string
  /** field 3, wire `webc_message_index` */
  webcMessageIndex?: number
  /** field 5, wire `webc_message_t` */
  webcMessageT?: string
  /** field 6, wire `webc_media_rmr_t` */
  webcMediaRmrT?: string
  /** field 7, wire `webc_media_size` */
  webcMediaSize?: number
  /** field 8, wire `webc_media_rmr_error` */
  webcMediaRmrError?: boolean
  /** field 9, wire `webc_chat_type` */
  webcChatType?: WEBCCHATTYPE
  /** field 10, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 11, wire `webc_browser_storage_quota_bytes` */
  webcBrowserStorageQuotaBytes?: number
  /** field 12, wire `webc_browser_storage_quota_used_bytes` */
  webcBrowserStorageQuotaUsedBytes?: number
  /** field 13, wire `webc_rmr_status_code` */
  webcRmrStatusCode?: number
  /** field 14, wire `webc_rmr_reason` */
  webcRmrReason?: WEBCRMRREASONCODE
}