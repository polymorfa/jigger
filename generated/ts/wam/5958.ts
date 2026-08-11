export const WamListUpdateUserJourney = 5958 as const

export interface ListUpdateUserJourneyEvent {
  /** field 1, wire `list_action` */
  listAction?: LISTACTION
  /** field 2, wire `list_id` */
  listId?: number
  /** field 3, wire `list_type` */
  listType?: LISTTYPE
  /** field 4, wire `list_update_user_journey_action` */
  listUpdateUserJourneyAction?: LISTUPDATEUSERJOURNEYACTION
  /** field 5, wire `predefined_id` */
  predefinedId?: number
  /** field 6, wire `update_entry_point` */
  updateEntryPoint?: UPDATEENTRYPOINT
  /** field 7, wire `custom_list_count` */
  customListCount?: number
  /** field 8, wire `preset_list_count` */
  presetListCount?: number
  /** field 9, wire `current_migration_bucket` */
  currentMigrationBucket?: number
  /** field 10, wire `previous_migration_bucket` */
  previousMigrationBucket?: number
  /** field 11, wire `visible_list_ids` */
  visibleListIds?: string
}