export const WamChatMute = 2280 as const

export interface ChatMuteEvent {
  /** field 1, wire `mute_duration` */
  muteDuration?: string
  /** field 2, wire `mute_group_size` */
  muteGroupSize?: number
  /** field 3, wire `action_conducted` */
  actionConducted?: ACTIONCONDUCTED
  /** field 4, wire `mute_chat_type` */
  muteChatType?: MUTECHATTYPE
  /** field 5, wire `chat_mute_notification_choice` */
  chatMuteNotificationChoice?: CHATMUTENOTIFICATIONCHOICE
  /** field 6, wire `mute_entry_point` */
  muteEntryPoint?: MUTEENTRYPOINT
  /** field 7, wire `wa_official_account_name` */
  waOfficialAccountName?: WAOFFICIALACCOUNTNAME
}