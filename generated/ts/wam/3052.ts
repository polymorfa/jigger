export const WamPsStructuredMessageInteraction = 3052 as const

export interface PsStructuredMessageInteractionEvent {
  /** field 1, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `message_class` */
  messageClass?: STRUCTUREDMESSAGECLASS
  /** field 4, wire `message_interaction` */
  messageInteraction?: INTERACTIONTYPE
  /** field 5, wire `message_class_attributes` */
  messageClassAttributes?: string
  /** field 7, wire `business_owner_jid` */
  businessOwnerJid?: string
  /** field 8, wire `template_id` */
  templateId?: string
  /** field 9, wire `thread_id_hmac` */
  threadIdHmac?: string
}