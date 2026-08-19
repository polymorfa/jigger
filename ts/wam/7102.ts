export const WamSmbListEvent = 7102 as const

export interface SmbListEventEvent {
  /** field 1, wire `custom_list_title` */
  customListTitle?: string
  /** field 2, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 3, wire `label_operation` */
  labelOperation?: LABELOPERATIONS
  /** field 4, wire `last_message_direction` */
  lastMessageDirection?: LASTMESSAGEDIRECTION
  /** field 5, wire `list_id` */
  listId?: number
  /** field 6, wire `list_index` */
  listIndex?: number
  /** field 7, wire `list_type` */
  listType?: LISTTYPE
  /** field 8, wire `message_depth` */
  messageDepth?: number
  /** field 9, wire `predefined_id` */
  predefinedId?: number
  /** field 10, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 11, wire `update_entry_point` */
  updateEntryPoint?: UPDATEENTRYPOINT
  /** field 12, wire `bulk_labeling` */
  bulkLabeling?: boolean
  /** field 13, wire `current_list_state` */
  currentListState?: string
  /** field 14, wire `label_target` */
  labelTarget?: LABELTARGETS
  /** field 15, wire `lists_applied` */
  listsApplied?: string
  /** field 16, wire `lists_removed` */
  listsRemoved?: string
  /** field 17, wire `app_session_id` */
  appSessionId?: string
  /** field 18, wire `extra_attributes` */
  extraAttributes?: string
  /** field 19, wire `user_action_target` */
  userActionTarget?: string
  /** field 20, wire `smb_list_feature_name` */
  smbListFeatureName?: SMBLISTFEATURENAMETYPE
  /** field 21, wire `smb_list_surface` */
  smbListSurface?: SMBLISTSURFACETYPE
}