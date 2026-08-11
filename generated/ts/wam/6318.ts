export const WamPsGroupExitExperienceExitDialogInteraction = 6318 as const

export interface PsGroupExitExperienceExitDialogInteractionEvent {
  /** field 1, wire `ps_exit_experience_reporting_enabled` */
  psExitExperienceReportingEnabled?: boolean
  /** field 2, wire `ps_group_exit_experience_enabled` */
  psGroupExitExperienceEnabled?: boolean
  /** field 3, wire `ps_group_exit_experience_exit_dialog_action` */
  psGroupExitExperienceExitDialogAction?: PSGROUPEXITEXPERIENCEEXITDIALOGACTIONS
  /** field 4, wire `ps_group_exit_experience_group_jid` */
  psGroupExitExperienceGroupJid?: string
  /** field 6, wire `ps_group_exit_experience_touch_point` */
  psGroupExitExperienceTouchPoint?: GROUPEXITEXPERIENCEORIGIN
}