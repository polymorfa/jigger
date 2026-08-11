export const WamStatusInteractionReceived = 6810 as const

export interface StatusInteractionReceivedEvent {
  /** field 1, wire `status_id` */
  statusId?: string
  /** field 2, wire `status_interaction_type` */
  statusInteractionType?: STATUSINTERACTIONTYPE
  /** field 3, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 4, wire `status_interaction_message_type` */
  statusInteractionMessageType?: STATUSINTERACTIONMESSAGETYPE
  /** field 5, wire `status_interaction_result_type` */
  statusInteractionResultType?: STATUSINTERACTIONRESULTTYPE
  /** field 6, wire `status_interaction_actors` */
  statusInteractionActors?: STATUSINTERACTIONACTORS
  /** field 7, wire `channel_status_id` */
  channelStatusId?: number
  /** field 8, wire `cid` */
  cid?: string
}