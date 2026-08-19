const WamPsGroupSafetyCheckEnabled = 6238 // channel: private

type PsGroupSafetyCheckEnabledEvent struct {
	PsSafetyCheckGroupJid string `wam:"ps_safety_check_group_jid"` // field 1
	PsWasSafetyCheckGroupInitiallyMuted bool `wam:"ps_was_safety_check_group_initially_muted"` // field 2
	DidJoinByGil bool `wam:"did_join_by_gil"` // field 3
	IntegrityGroupUserHashedId string `wam:"integrity_group_user_hashed_id"` // field 4
	WasAddedByContact bool `wam:"was_added_by_contact"` // field 5
	WillSafetyCheckBeSeen bool `wam:"will_safety_check_be_seen"` // field 6
}