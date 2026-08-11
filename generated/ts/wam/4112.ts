export const WamExtensionScreenProgress = 4112 as const

export interface ExtensionScreenProgressEvent {
  /** field 1, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 2, wire `business_owner_jid` */
  businessOwnerJid?: string
  /** field 3, wire `embedded_error` */
  embeddedError?: string
  /** field 4, wire `embedded_flow` */
  embeddedFlow?: string
  /** field 5, wire `embedded_flow_type` */
  embeddedFlowType?: string
  /** field 6, wire `extension_category` */
  extensionCategory?: string
  /** field 7, wire `extension_screen_length` */
  extensionScreenLength?: number
  /** field 8, wire `extensions_flow_id` */
  extensionsFlowId?: string
  /** field 9, wire `extensions_message_id` */
  extensionsMessageId?: string
  /** field 10, wire `extensions_session_id` */
  extensionsSessionId?: string
  /** field 11, wire `flow_status_exit` */
  flowStatusExit?: string
  /** field 12, wire `hsm_category` */
  hsmCategory?: string
  /** field 13, wire `is_template` */
  isTemplate?: boolean
  /** field 14, wire `screen_progress` */
  screenProgress?: string
  /** field 15, wire `sequence_number` */
  sequenceNumber?: number
  /** field 16, wire `hsm_tag` */
  hsmTag?: string
  /** field 17, wire `extension_restored_from_cache` */
  extensionRestoredFromCache?: boolean
  /** field 18, wire `extension_status` */
  extensionStatus?: string
  /** field 19, wire `entry_point_conversation_initiated` */
  entryPointConversationInitiated?: ENTRYPOINTCONVERSATIONINITIATED
  /** field 20, wire `entry_point_conversion_app` */
  entryPointConversionApp?: string
  /** field 21, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 22, wire `ad_context` */
  adContext?: string
  /** field 23, wire `flow_entry_point` */
  flowEntryPoint?: FLOWENTRYPOINT
  /** field 24, wire `click_sequence_number` */
  clickSequenceNumber?: number
  /** field 25, wire `is_success_screen` */
  isSuccessScreen?: boolean
  /** field 26, wire `layout_type` */
  layoutType?: string
  /** field 27, wire `shopping_cart_items_count` */
  shoppingCartItemsCount?: number
}