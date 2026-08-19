const WamPsGroupSafetyCheckUiInteractions = 6242 // channel: private

type PsGroupSafetyCheckUiInteractionsEvent struct {
	PsSafetyCheckGroupJid string `wam:"ps_safety_check_group_jid"` // field 1
	PsSafetyCheckInteraction PSGROUPSAFETYCHECKUIINTERACTIONS `wam:"ps_safety_check_interaction"` // field 2
	IntegrityGroupUserHashedId string `wam:"integrity_group_user_hashed_id"` // field 3
}