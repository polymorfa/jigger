export const WamCoexPrivacySysMsg = 5204 as const

export interface CoexPrivacySysMsgEvent {
  /** field 1, wire `coex_sys_msg_business_id` */
  coexSysMsgBusinessId?: string
  /** field 2, wire `coex_sys_msg_insertion_error_code` */
  coexSysMsgInsertionErrorCode?: number
  /** field 3, wire `coex_sys_msg_insertion_error_msg` */
  coexSysMsgInsertionErrorMsg?: string
  /** field 4, wire `coex_sys_msg_insertion_success` */
  coexSysMsgInsertionSuccess?: boolean
  /** field 5, wire `coex_sys_msg_is_self` */
  coexSysMsgIsSelf?: boolean
  /** field 6, wire `coex_sys_msg_multi_device_id` */
  coexSysMsgMultiDeviceId?: number
  /** field 7, wire `coex_sys_msg_state_transition_attempt` */
  coexSysMsgStateTransitionAttempt?: COEXSYSMSGSTATETRANSITIONATTEMPT
  /** field 8, wire `coex_status_reply_privacy_disclaimer_user_action` */
  coexStatusReplyPrivacyDisclaimerUserAction?: COEXSTATUSREPLYPRIVACYDISCLAIMERUSERACTION
  /** field 9, wire `coex_sys_msg_insertion_channel` */
  coexSysMsgInsertionChannel?: COEXSYSMSGINSERTIONCHANNEL
}