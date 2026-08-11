export const WamPsGroupSafetyCheckExitDialog = 6252 as const

export interface PsGroupSafetyCheckExitDialogEvent {
  /** field 1, wire `ps_group_safety_check_exit_dialog_action` */
  psGroupSafetyCheckExitDialogAction?: PSGROUPSAFETYCHECKEXITDIALOGACTIONS
  /** field 2, wire `ps_safety_check_group_jid` */
  psSafetyCheckGroupJid?: string
  /** field 3, wire `integrity_group_user_hashed_id` */
  integrityGroupUserHashedId?: string
}