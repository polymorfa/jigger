export const WamUsernameCreationAction = 5224 as const

export interface UsernameCreationActionEvent {
  /** field 2, wire `username_creation_action_name` */
  usernameCreationActionName?: USERNAMECREATIONACTIONNAME
  /** field 3, wire `username_creation_current_screen` */
  usernameCreationCurrentScreen?: USERNAMECREATIONCURRENTSCREEN
  /** field 4, wire `username_creation_entrypoint` */
  usernameCreationEntrypoint?: USERNAMECREATIONENTRYPOINT
  /** field 6, wire `username_creation_username_session_id` */
  usernameCreationUsernameSessionId?: string
  /** field 7, wire `username_creation_error_cd` */
  usernameCreationErrorCd?: number
  /** field 8, wire `username_source` */
  usernameSource?: USERNAMESOURCE
  /** field 9, wire `username_creation_flow_type` */
  usernameCreationFlowType?: USERNAMECREATIONFLOWTYPE
  /** field 10, wire `linked_accounts_fb` */
  linkedAccountsFb?: number
  /** field 11, wire `linked_accounts_ig` */
  linkedAccountsIg?: number
  /** field 12, wire `username_link_type` */
  usernameLinkType?: USERNAMELINKTYPE
  /** field 13, wire `username_creation_error_message` */
  usernameCreationErrorMessage?: USERNAMECREATIONERRORMESSAGE
  /** field 14, wire `eligible_to_link` */
  eligibleToLink?: boolean
  /** field 15, wire `username_creation_deep_link_campaign` */
  usernameCreationDeepLinkCampaign?: string
  /** field 16, wire `username_creation_deep_link_channel` */
  usernameCreationDeepLinkChannel?: string
  /** field 17, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 18, wire `username_link_origin_surface` */
  usernameLinkOriginSurface?: USERNAMELINKORIGINSURFACE
}