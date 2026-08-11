export const WamListUpdate = 5830 as const

export interface ListUpdateEvent {
  /** field 1, wire `list_action` */
  listAction?: LISTACTION
  /** field 2, wire `list_id` */
  listId?: number
  /** field 3, wire `list_type` */
  listType?: LISTTYPE
  /** field 8, wire `update_entry_point` */
  updateEntryPoint?: UPDATEENTRYPOINT
  /** field 9, wire `groups_added` */
  groupsAdded?: number
  /** field 10, wire `groups_after_update` */
  groupsAfterUpdate?: number
  /** field 11, wire `users_added` */
  usersAdded?: number
  /** field 12, wire `users_after_update` */
  usersAfterUpdate?: number
  /** field 13, wire `predefined_id` */
  predefinedId?: number
}