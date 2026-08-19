export const WamDangerousFileOpenStatsV2 = 6708 as const

export interface DangerousFileOpenStatsV2Event {
  /** field 1, wire `harmful_file_warning_clickthrough_action` */
  harmfulFileWarningClickthroughAction?: HARMFULFILEWARNINGCLICKTHROUGHACTION
  /** field 2, wire `harmful_file_warning_sender_relationship` */
  harmfulFileWarningSenderRelationship?: HARMFULFILEWARNINGSENDERRELATIONSHIP
}