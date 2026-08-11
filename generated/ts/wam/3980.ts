export const WamAttachmentTrayActions = 3980 as const

export interface AttachmentTrayActionsEvent {
  /** field 1, wire `action_duration_ms` */
  actionDurationMs?: number
  /** field 2, wire `attachment_tray_action` */
  attachmentTrayAction?: ATTACHMENTTRAYACTIONTYPE
  /** field 3, wire `attachment_tray_action_target` */
  attachmentTrayActionTarget?: ATTACHMENTTRAYACTIONTARGETTYPE
  /** field 4, wire `group_size_bucket` */
  groupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 5, wire `is_a_group` */
  isAGroup?: boolean
  /** field 6, wire `is_successful` */
  isSuccessful?: boolean
  /** field 7, wire `send_media_type` */
  sendMediaType?: SENDMEDIATYPETYPE
  /** field 8, wire `send_time` */
  sendTime?: number
  /** field 9, wire `action_thread_type` */
  actionThreadType?: ACTIONTHREADTYPETYPE
}