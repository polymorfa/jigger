export const WamChatPsaAction = 3572 as const

export interface ChatPsaActionEvent {
  /** field 1, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 2, wire `psa_message_action_type` */
  psaMessageActionType?: PSAMESSAGEACTIONTYPE
  /** field 4, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 5, wire `psa_msg_id` */
  psaMsgId?: string
}