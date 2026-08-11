export const WamStructuredMessageBuyerReceive = 7520 as const

export interface StructuredMessageBuyerReceiveEvent {
  /** field 1, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 2, wire `message_class` */
  messageClass?: STRUCTUREDMESSAGECLASS
  /** field 3, wire `message_class_attributes` */
  messageClassAttributes?: string
  /** field 4, wire `message_interaction` */
  messageInteraction?: INTERACTIONTYPE
  /** field 5, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
}