export const WamStatusInteractionSent = 6812 as const

export interface StatusInteractionSentEvent {
  /** field 1, wire `status_id` */
  statusId?: string
  /** field 2, wire `status_interaction_type` */
  statusInteractionType?: STATUSINTERACTIONTYPE
  /** field 3, wire `status_row_section` */
  statusRowSection?: STATUSROWSECTION
  /** field 4, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
  /** field 5, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 6, wire `status_interaction_message_type` */
  statusInteractionMessageType?: STATUSINTERACTIONMESSAGETYPE
  /** field 7, wire `status_interaction_result_type` */
  statusInteractionResultType?: STATUSINTERACTIONRESULTTYPE
  /** field 8, wire `status_poster_contact_type` */
  statusPosterContactType?: STATUSPOSTERCONTACTTYPE
  /** field 9, wire `status_interaction_actors` */
  statusInteractionActors?: STATUSINTERACTIONACTORS
  /** field 10, wire `channel_status_id` */
  channelStatusId?: number
  /** field 11, wire `channel_user_type` */
  channelUserType?: CHANNELUSERTYPE
  /** field 12, wire `cid` */
  cid?: string
}