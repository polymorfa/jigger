export const WamPsGroupExitExperienceGroupAction = 6332 as const

export interface PsGroupExitExperienceGroupActionEvent {
  /** field 1, wire `ps_group_exit_experience_action` */
  psGroupExitExperienceAction?: PSGROUPEXITEXPERIENCEACTIONS
  /** field 2, wire `ps_group_exit_experience_enabled` */
  psGroupExitExperienceEnabled?: boolean
  /** field 3, wire `ps_group_exit_experience_group_jid` */
  psGroupExitExperienceGroupJid?: string
  /** field 4, wire `ps_group_exit_experience_touch_point` */
  psGroupExitExperienceTouchPoint?: GROUPEXITEXPERIENCEORIGIN
}