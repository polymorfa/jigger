export const WamPsGroupExitExperienceExitDeleteConfirmationDialogUiInteraction = 6316 as const

export interface PsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionEvent {
  /** field 1, wire `ps_group_exit_experience_delete_confirmation_dialog_action` */
  psGroupExitExperienceDeleteConfirmationDialogAction?: PSGROUPEXITEXPERIENCEDELETECONFIRMATIONDIALOGACTIONS
  /** field 2, wire `ps_group_exit_experience_group_jid` */
  psGroupExitExperienceGroupJid?: string
  /** field 4, wire `ps_group_exit_experience_touch_point` */
  psGroupExitExperienceTouchPoint?: GROUPEXITEXPERIENCEORIGIN
}