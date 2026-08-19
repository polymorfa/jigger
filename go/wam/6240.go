const WamPsGroupSafetyCheckSheetSeen = 6240 // channel: private

type PsGroupSafetyCheckSheetSeenEvent struct {
	PsSafetyCheckGroupJid string `wam:"ps_safety_check_group_jid"` // field 1
	IntegrityGroupUserHashedId string `wam:"integrity_group_user_hashed_id"` // field 2
}