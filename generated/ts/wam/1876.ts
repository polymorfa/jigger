export const WamWebcMessageQuery = 1876 as const

export interface WebcMessageQueryEvent {
  /** field 1, wire `webc_browser_network_type` */
  webcBrowserNetworkType?: string
  /** field 2, wire `webc_chat_position` */
  webcChatPosition?: number
  /** field 3, wire `webc_message_query_type` */
  webcMessageQueryType?: WEBCMESSAGEQUERYDIRECTION
  /** field 4, wire `webc_message_count` */
  webcMessageCount?: number
  /** field 5, wire `webc_text_message_count` */
  webcTextMessageCount?: number
  /** field 6, wire `webc_video_message_count` */
  webcVideoMessageCount?: number
  /** field 7, wire `webc_photo_message_count` */
  webcPhotoMessageCount?: number
  /** field 9, wire `webc_query_t` */
  webcQueryT?: string
  /** field 10, wire `webc_response_bytes` */
  webcResponseBytes?: number
  /** field 11, wire `webc_earliest_message_index` */
  webcEarliestMessageIndex?: number
  /** field 12, wire `webc_earliest_message_t` */
  webcEarliestMessageT?: string
  /** field 13, wire `webc_chat_type` */
  webcChatType?: WEBCCHATTYPE
  /** field 14, wire `webc_audio_message_count` */
  webcAudioMessageCount?: number
  /** field 15, wire `webc_ptt_message_count` */
  webcPttMessageCount?: number
  /** field 16, wire `webc_document_message_count` */
  webcDocumentMessageCount?: number
  /** field 17, wire `webc_sticker_message_count` */
  webcStickerMessageCount?: number
  /** field 18, wire `webc_other_message_count` */
  webcOtherMessageCount?: number
  /** field 19, wire `webc_message_query_trigger` */
  webcMessageQueryTrigger?: WEBCQUERYTRIGGERTYPE
  /** field 20, wire `webc_browser_storage_quota_bytes` */
  webcBrowserStorageQuotaBytes?: number
  /** field 21, wire `webc_browser_storage_quota_used_bytes` */
  webcBrowserStorageQuotaUsedBytes?: number
}