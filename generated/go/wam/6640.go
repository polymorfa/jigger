const WamWefrGroupClientExposure = 6640 // channel: realtime

type WefrGroupClientExposureEvent struct {
	ExposureKey string `wam:"exposure_key"` // field 1
	GroupJid string `wam:"group_jid"` // field 2
	SentWithDaily bool `wam:"sent_with_daily"` // field 3
}