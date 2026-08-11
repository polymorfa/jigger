export const WamLabelEvent = 1422 as const

export interface LabelEventEvent {
  /** field 1, wire `label_target` */
  labelTarget?: LABELTARGETS
  /** field 2, wire `label_operation` */
  labelOperation?: LABELOPERATIONS
  /** field 3, wire `predefined_label_number` */
  predefinedLabelNumber?: number
  /** field 4, wire `label_count` */
  labelCount?: number
  /** field 5, wire `items_labeled_count` */
  itemsLabeledCount?: number
  /** field 6, wire `label_operation_entry_point` */
  labelOperationEntryPoint?: string
  /** field 9, wire `custom_label_title` */
  customLabelTitle?: string
  /** field 10, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 11, wire `thread_creation_date` */
  threadCreationDate?: string
  /** field 12, wire `thread_id` */
  threadId?: string
  /** field 13, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 14, wire `last_message_direction` */
  lastMessageDirection?: LASTMESSAGEDIRECTION
  /** field 15, wire `message_depth` */
  messageDepth?: number
  /** field 16, wire `app_session_id` */
  appSessionId?: string
  /** field 17, wire `extra_attributes` */
  extraAttributes?: string
  /** field 18, wire `user_action_target` */
  userActionTarget?: string
  /** field 19, wire `smb_list_feature_name` */
  smbListFeatureName?: SMBLISTFEATURENAMETYPE
  /** field 20, wire `smb_list_surface` */
  smbListSurface?: SMBLISTSURFACETYPE
}