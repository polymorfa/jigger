export const WamChatPsaRead = 3574 as const

export interface ChatPsaReadEvent {
  /** field 1, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `read_entry_point` */
  readEntryPoint?: READENTRYPOINT
  /** field 4, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 5, wire `psa_msg_id` */
  psaMsgId?: string
}