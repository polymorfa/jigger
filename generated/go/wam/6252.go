const WamPsGroupSafetyCheckExitDialog = 6252 // channel: private

type PsGroupSafetyCheckExitDialogEvent struct {
	PsGroupSafetyCheckExitDialogAction PSGROUPSAFETYCHECKEXITDIALOGACTIONS `wam:"ps_group_safety_check_exit_dialog_action"` // field 1
	PsSafetyCheckGroupJid string `wam:"ps_safety_check_group_jid"` // field 2
	IntegrityGroupUserHashedId string `wam:"integrity_group_user_hashed_id"` // field 3
}