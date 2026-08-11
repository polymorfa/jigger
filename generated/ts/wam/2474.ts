export const WamUserNoticeError = 2474 as const

export interface UserNoticeErrorEvent {
  /** field 1, wire `user_notice_id` */
  userNoticeId?: number
  /** field 2, wire `user_notice_content_version` */
  userNoticeContentVersion?: number
  /** field 3, wire `user_notice_error_event` */
  userNoticeErrorEvent?: USERNOTICEERROREVENT
  /** field 4, wire `notice_type` */
  noticeType?: NOTICETYPE
}