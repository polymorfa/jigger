export const WamGroupHistorySenderUserJourney = 8378 as const

export interface GroupHistorySenderUserJourneyEvent {
  /** field 1, wire `bundle_send_source` */
  bundleSendSource?: BUNDLESENDSOURCE
  /** field 2, wire `group_history_messages_count` */
  groupHistoryMessagesCount?: number
  /** field 3, wire `group_history_out_window_pins_count` */
  groupHistoryOutWindowPinsCount?: number
  /** field 4, wire `group_history_pins_count` */
  groupHistoryPinsCount?: number
  /** field 5, wire `group_history_sender_action_type` */
  groupHistorySenderActionType?: GROUPHISTORYSENDERACTIONTYPE
  /** field 6, wire `group_history_system_message_type` */
  groupHistorySystemMessageType?: GROUPHISTORYSYSTEMMESSAGETYPE
  /** field 7, wire `group_history_uncounted_messages_count` */
  groupHistoryUncountedMessagesCount?: number
  /** field 8, wire `group_size` */
  groupSize?: number
  /** field 9, wire `ineligible_reason` */
  ineligibleReason?: GROUPHISTORYINELIGIBILITYREASON
  /** field 10, wire `recipient_count` */
  recipientCount?: number
  /** field 11, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 12, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 13, wire `user_journey_ts` */
  userJourneyTs?: number
  /** field 14, wire `is_tee_bot_notice_only` */
  isTeeBotNoticeOnly?: boolean
  /** field 15, wire `is_group_history_toggled_on` */
  isGroupHistoryToggledOn?: boolean
  /** field 16, wire `x_ineligible_reasons` */
  xIneligibleReasons?: string
}