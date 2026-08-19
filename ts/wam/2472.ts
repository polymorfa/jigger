export const WamUserNotice = 2472 as const

export interface UserNoticeEvent {
  /** field 1, wire `user_notice_id` */
  userNoticeId?: number
  /** field 2, wire `user_notice_content_version` */
  userNoticeContentVersion?: number
  /** field 3, wire `user_notice_event` */
  userNoticeEvent?: USERNOTICEEVENT
  /** field 4, wire `notice_type` */
  noticeType?: NOTICETYPE
  /** field 5, wire `notice_triggered_by` */
  noticeTriggeredBy?: NOTICETRIGGEREDBY
  /** field 6, wire `ts_ms` */
  tsMs?: string
}