export const WamStatusReply = 1180 as const

export interface StatusReplyEvent {
  /** field 1, wire `status_session_id` */
  statusSessionId?: number
  /** field 2, wire `status_reply_result` */
  statusReplyResult?: STATUSREPLYRESULT
  /** field 3, wire `status_reply_message_type` */
  statusReplyMessageType?: STATUSREPLYMESSAGETYPE
  /** field 4, wire `is_poster_biz` */
  isPosterBiz?: boolean
  /** field 6, wire `is_poster_in_address_book` */
  isPosterInAddressBook?: boolean
  /** field 7, wire `is_mentioned` */
  isMentioned?: boolean
  /** field 8, wire `status_content_type` */
  statusContentType?: STATUSCONTENTTYPE
  /** field 9, wire `is_reply_bar_below_canvas` */
  isReplyBarBelowCanvas?: boolean
  /** field 10, wire `is_reply_bar_over_media` */
  isReplyBarOverMedia?: boolean
  /** field 11, wire `media_height` */
  mediaHeight?: number
  /** field 12, wire `media_width` */
  mediaWidth?: number
  /** field 13, wire `reply_entry_method` */
  replyEntryMethod?: REPLYENTRYMETHOD
  /** field 14, wire `reply_exit_method` */
  replyExitMethod?: REPLYEXITMETHOD
  /** field 15, wire `post_contained_prompt` */
  postContainedPrompt?: boolean
  /** field 16, wire `is_recent_quick_reply_used` */
  isRecentQuickReplyUsed?: boolean
  /** field 17, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 19, wire `is_subscribed` */
  isSubscribed?: boolean
  /** field 20, wire `message_send_result` */
  messageSendResult?: MESSAGESENDRESULTTYPE
  /** field 21, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 22, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 23, wire `status_id` */
  statusId?: string
  /** field 24, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
  /** field 25, wire `status_poster_contact_type` */
  statusPosterContactType?: STATUSPOSTERCONTACTTYPE
  /** field 26, wire `quick_reply_source` */
  quickReplySource?: QUICKREPLYSOURCE
}