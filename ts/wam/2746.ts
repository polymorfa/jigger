export const WamMdCriticalEvent = 2746 as const

export interface MdCriticalEventEvent {
  /** field 1, wire `md_critical_event_code` */
  mdCriticalEventCode?: MDSYNCDCRITICALEVENTCODE
  /** field 2, wire `collection` */
  collection?: COLLECTION
  /** field 3, wire `mutation_action_name` */
  mutationActionName?: string
  /** field 4, wire `md_critical_event_error_message` */
  mdCriticalEventErrorMessage?: string
  /** field 5, wire `md_critical_event_stage` */
  mdCriticalEventStage?: string
}