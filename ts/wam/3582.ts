export const WamChatPsaRemove = 3582 as const

export interface ChatPsaRemoveEvent {
  /** field 2, wire `last_received_media_type` */
  lastReceivedMediaType?: MEDIATYPE
  /** field 4, wire `last_received_message_ts` */
  lastReceivedMessageTs?: string
  /** field 5, wire `psa_message_remove_action` */
  psaMessageRemoveAction?: PSAMESSAGEREMOVEACTION
  /** field 6, wire `psa_message_remove_entry_point` */
  psaMessageRemoveEntryPoint?: PSAMESSAGEREMOVEENTRYPOINT
  /** field 7, wire `wa_official_account_name` */
  waOfficialAccountName?: WAOFFICIALACCOUNTNAME
  /** field 8, wire `last_received_msg_id` */
  lastReceivedMsgId?: string
  /** field 9, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 10, wire `psa_block_reason` */
  psaBlockReason?: PSABLOCKREASON
}