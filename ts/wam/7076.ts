export const WamBusinessTemplateRichOrderStatus = 7076 as const

export interface BusinessTemplateRichOrderStatusEvent {
  /** field 1, wire `action_type_rich_order_status` */
  actionTypeRichOrderStatus?: string
  /** field 2, wire `business_jid` */
  businessJid?: string
  /** field 3, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 4, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 5, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 6, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 7, wire `is_muted` */
  isMuted?: boolean
  /** field 8, wire `read_receipts_enabled` */
  readReceiptsEnabled?: boolean
  /** field 9, wire `template_id` */
  templateId?: string
}