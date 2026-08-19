const WamPsIdUpdate = 2862 // channel: regular

type PsIdUpdateEvent struct {
	PsIdKey int64 `wam:"ps_id_key"` // field 1
	PsIdAction PSIDACTION `wam:"ps_id_action"` // field 2
	PsIdRotationFrequence int64 `wam:"ps_id_rotation_frequence"` // field 3
	IsFromWamsys bool `wam:"is_from_wamsys"` // field 4
}