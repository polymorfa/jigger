export const WamQbmRichOrderStatusInteraction = 6940 as const

export interface QbmRichOrderStatusInteractionEvent {
  /** field 1, wire `action_type_rich_order_status` */
  actionTypeRichOrderStatus?: string
  /** field 2, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 3, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 4, wire `decision_id` */
  decisionId?: string
  /** field 5, wire `delta_time` */
  deltaTime?: number
  /** field 6, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 7, wire `entry_point` */
  entryPoint?: ENTRYPOINT
  /** field 8, wire `hsm_tag_str` */
  hsmTagStr?: string
  /** field 9, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 10, wire `is_broadcast_message` */
  isBroadcastMessage?: boolean
  /** field 11, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 12, wire `is_muted` */
  isMuted?: boolean
  /** field 13, wire `message_id_hmac` */
  messageIdHmac?: string
  /** field 14, wire `qbm_flag` */
  qbmFlag?: QBMFLAG
  /** field 15, wire `read_receipts_enabled` */
  readReceiptsEnabled?: boolean
  /** field 16, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 17, wire `unified_session_id` */
  unifiedSessionId?: string
}