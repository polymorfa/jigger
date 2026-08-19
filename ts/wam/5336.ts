export const WamGroupMemberAddingUserJourney = 5336 as const

export interface GroupMemberAddingUserJourneyEvent {
  /** field 1, wire `add_selected_contacts_count` */
  addSelectedContactsCount?: number
  /** field 2, wire `app_session_id` */
  appSessionId?: string
  /** field 3, wire `frequently_contacted_index` */
  frequentlyContactedIndex?: number
  /** field 4, wire `group_member_adding_action_type` */
  groupMemberAddingActionType?: GROUPMEMBERADDINGACTIONTYPE
  /** field 5, wire `recently_contacted_index` */
  recentlyContactedIndex?: number
  /** field 6, wire `suggested_contacts_count` */
  suggestedContactsCount?: number
  /** field 7, wire `suggested_contacts_index` */
  suggestedContactsIndex?: number
  /** field 8, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 9, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 10, wire `potential_total_suggestion_count` */
  potentialTotalSuggestionCount?: number
  /** field 11, wire `group_creation_group_id` */
  groupCreationGroupId?: string
  /** field 12, wire `has_group_name` */
  hasGroupName?: boolean
  /** field 13, wire `has_profile_picture` */
  hasProfilePicture?: boolean
  /** field 14, wire `selected_member_cnt` */
  selectedMemberCnt?: number
  /** field 15, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 16, wire `group_create_entry_point` */
  groupCreateEntryPoint?: GROUPCREATEENTRYPOINT
  /** field 18, wire `group_server_error_code` */
  groupServerErrorCode?: number
  /** field 19, wire `group_server_error_code_msg` */
  groupServerErrorCodeMsg?: string
  /** field 20, wire `bundle_send_source` */
  bundleSendSource?: BUNDLESENDSOURCE
  /** field 21, wire `group_history_messages_count` */
  groupHistoryMessagesCount?: number
  /** field 22, wire `is_group_history_toggled_on` */
  isGroupHistoryToggledOn?: boolean
  /** field 23, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 24, wire `group_member_adding_member_type` */
  groupMemberAddingMemberType?: GROUPMEMBERADDINGMEMBERTYPE
  /** field 25, wire `group_history_out_window_pins_count` */
  groupHistoryOutWindowPinsCount?: number
  /** field 26, wire `group_history_pins_count` */
  groupHistoryPinsCount?: number
  /** field 27, wire `group_history_uncounted_messages_count` */
  groupHistoryUncountedMessagesCount?: number
  /** field 28, wire `group_add_member_entry_point` */
  groupAddMemberEntryPoint?: ADDMEMBERSENTRYPOINTTYPE
  /** field 29, wire `is_admin` */
  isAdmin?: boolean
  /** field 30, wire `is_tee_bot_notice_only` */
  isTeeBotNoticeOnly?: boolean
}