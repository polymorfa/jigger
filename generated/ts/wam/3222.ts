export const WamStructuredMessageReceive = 3222 as const

export interface StructuredMessageReceiveEvent {
  /** field 1, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 2, wire `business_owner_jid` */
  businessOwnerJid?: string
  /** field 3, wire `message_class` */
  messageClass?: STRUCTUREDMESSAGECLASS
  /** field 4, wire `message_class_attributes` */
  messageClassAttributes?: string
  /** field 5, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 6, wire `template_id` */
  templateId?: string
  /** field 7, wire `entry_point_conversation_initiated` */
  entryPointConversationInitiated?: ENTRYPOINTCONVERSATIONINITIATED
  /** field 8, wire `entry_point_conversion_app` */
  entryPointConversionApp?: string
  /** field 9, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 10, wire `last_message_direction` */
  lastMessageDirection?: LASTMESSAGEDIRECTION
  /** field 11, wire `message_depth` */
  messageDepth?: number
  /** field 12, wire `thread_id_hmac` */
  threadIdHmac?: string
}