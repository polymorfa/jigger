const WamWefrClientExposure = 5504 // channel: realtime

type WefrClientExposureEvent struct {
	ExposureKey string `wam:"exposure_key"` // field 1
	SentWithDaily bool `wam:"sent_with_daily"` // field 3
	UserLid int64 `wam:"user_lid"` // field 4
	DeviceExpId string `wam:"device_exp_id"` // field 5
	IsCanonicalEntPresent bool `wam:"is_canonical_ent_present"` // field 6
	GuestId string `wam:"guest_id"` // field 7
	CanonicalEntLastValidationTsMs int64 `wam:"canonical_ent_last_validation_ts_ms"` // field 8
	FromMetaconfig bool `wam:"from_metaconfig"` // field 9
}