const WamDefenseModeQuarantine = 7098 // channel: regular

type DefenseModeQuarantineEvent struct {
	QuarantineAction DEFENSEMODEQUARANTINEACTION `wam:"quarantine_action"` // field 1
	DefenseModeQuarantineEventCount int64 `wam:"defense_mode_quarantine_event_count"` // field 2
	DefenseModeQuarantineIsCapi bool `wam:"defense_mode_quarantine_is_capi"` // field 3
	JidDomain JIDDOMAINTYPE `wam:"jid_domain"` // field 4
}