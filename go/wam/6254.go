const WamPsChannelsSnaplEvent = 6254 // channel: private

type PsChannelsSnaplEventEvent struct {
	VideoEventJson string `wam:"video_event_json"` // field 1
	AppId int64 `wam:"app_id"` // field 2
}