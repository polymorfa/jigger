export const WamGroupMemberTagUpdate = 7010 as const

export interface GroupMemberTagUpdateEvent {
  /** field 1, wire `group_id` */
  groupId?: string
  /** field 2, wire `group_member_tag_update_action` */
  groupMemberTagUpdateAction?: GROUPMEMBERTAGUPDATEACTIONTYPE
  /** field 3, wire `has_member_tag_at_start` */
  hasMemberTagAtStart?: boolean
  /** field 4, wire `member_tag_entry_point` */
  memberTagEntryPoint?: GROUPMEMBERTAGENTRYPOINTTYPE
  /** field 5, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 6, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 7, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
}