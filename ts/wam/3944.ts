export const WamWaFsGroupJoinRequestAction = 3944 as const

export interface WaFsGroupJoinRequestActionEvent {
  /** field 1, wire `group_jid` */
  groupJid?: string
  /** field 2, wire `group_join_request_action` */
  groupJoinRequestAction?: GROUPJOINREQUESTACTIONTYPE
  /** field 3, wire `is_successful` */
  isSuccessful?: boolean
  /** field 4, wire `server_response_time` */
  serverResponseTime?: string
  /** field 5, wire `group_join_request_groups_in_common` */
  groupJoinRequestGroupsInCommon?: number
  /** field 6, wire `group_join_request_entrypoint` */
  groupJoinRequestEntrypoint?: GROUPJOINREQUESTENTRYPOINTTYPE
}