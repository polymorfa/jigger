export const WamMdLinkDeviceCompanion = 2576 as const

export interface MdLinkDeviceCompanionEvent {
  /** field 1, wire `md_session_id` */
  mdSessionId?: string
  /** field 4, wire `md_link_device_companion_stage` */
  mdLinkDeviceCompanionStage?: MDLINKDEVICECOMPANIONSTAGE
  /** field 5, wire `md_was_upgraded` */
  mdWasUpgraded?: boolean
  /** field 6, wire `md_link_device_companion_error_code` */
  mdLinkDeviceCompanionErrorCode?: number
  /** field 7, wire `md_timestamp_s` */
  mdTimestampS?: number
  /** field 8, wire `md_duration_s` */
  mdDurationS?: number
  /** field 9, wire `md_reg_attempt_id` */
  mdRegAttemptId?: string
  /** field 10, wire `md_companion_ref_hash` */
  mdCompanionRefHash?: string
  /** field 11, wire `md_link_device_experience_id` */
  mdLinkDeviceExperienceId?: number
  /** field 12, wire `application_state` */
  applicationState?: APPLICATIONSTATE
  /** field 13, wire `app_context` */
  appContext?: string
  /** field 14, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 15, wire `user_locale` */
  userLocale?: string
}