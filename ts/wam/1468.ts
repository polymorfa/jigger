export const WamQuickReply = 1468 as const

export interface QuickReplyEvent {
  /** field 1, wire `quick_reply_action` */
  quickReplyAction?: QUICKREPLYACTION
  /** field 2, wire `quick_reply_count` */
  quickReplyCount?: number
  /** field 3, wire `quick_reply_keyword_count` */
  quickReplyKeywordCount?: number
  /** field 4, wire `quick_reply_keyword_matched` */
  quickReplyKeywordMatched?: boolean
  /** field 5, wire `attachment_image_count` */
  attachmentImageCount?: number
  /** field 6, wire `attachment_video_count` */
  attachmentVideoCount?: number
  /** field 7, wire `attachment_gif_count` */
  attachmentGifCount?: number
  /** field 8, wire `quick_reply_transcode_result` */
  quickReplyTranscodeResult?: QUICKREPLYTRANSCODERESULT
  /** field 9, wire `quick_reply_origin` */
  quickReplyOrigin?: QUICKREPLYORIGIN
  /** field 10, wire `is_smart_default` */
  isSmartDefault?: boolean
  /** field 11, wire `quick_reply_entry_point` */
  quickReplyEntryPoint?: QUICKREPLYENTRYPOINT
  /** field 12, wire `label_thread_id` */
  labelThreadId?: string
  /** field 13, wire `thread_entry_point` */
  threadEntryPoint?: string
  /** field 14, wire `thread_creation_date` */
  threadCreationDate?: string
  /** field 15, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 16, wire `last_message_direction` */
  lastMessageDirection?: LASTMESSAGEDIRECTION
  /** field 17, wire `message_depth` */
  messageDepth?: number
  /** field 19, wire `quick_reply_type` */
  quickReplyType?: QUICKREPLYTYPE
  /** field 20, wire `list_ids` */
  listIds?: string
}