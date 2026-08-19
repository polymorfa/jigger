const WamMdAppStateKeyRotation = 2518 // channel: regular

type MdAppStateKeyRotationEvent struct {
	MdAppStateKeyRotationReason MDAPPSTATEKEYROTATIONREASONCODE `wam:"md_app_state_key_rotation_reason"` // field 1
	AppSessionId string `wam:"app_session_id"` // field 2
	CompanionSessionIds string `wam:"companion_session_ids"` // field 3
	OldSyncdKeyhash string `wam:"old_syncd_keyhash"` // field 6
	OldSyncdKeyid string `wam:"old_syncd_keyid"` // field 7
	SeqNumber int64 `wam:"seq_number"` // field 8
	SyncdKeyhashAfterRotation string `wam:"syncd_keyhash_after_rotation"` // field 9
	SyncdKeyidAfterRotation string `wam:"syncd_keyid_after_rotation"` // field 10
}