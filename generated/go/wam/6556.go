const WamChannelsVideoPlay = 6556 // channel: regular

type ChannelsVideoPlayEvent struct {
	AutoPlayT int64 `wam:"auto_play_t"` // field 1
	Cid string `wam:"cid"` // field 2
	Height int64 `wam:"height"` // field 3
	PostId string `wam:"post_id"` // field 4
	VideoDuration int64 `wam:"video_duration"` // field 5
	VideoInitialBufferingT string `wam:"video_initial_buffering_t"` // field 6
	VideoPlayOrigin VIDEOPLAYORIGIN `wam:"video_play_origin"` // field 7
	VideoPlayResult VIDEOPLAYRESULT `wam:"video_play_result"` // field 8
	VideoPlayT int64 `wam:"video_play_t"` // field 9
	VideoPlayType VIDEOPLAYTYPE `wam:"video_play_type"` // field 10
	VideoSize string `wam:"video_size"` // field 11
	Width int64 `wam:"width"` // field 12
	FinishCount int64 `wam:"finish_count"` // field 13
	WatchingModule string `wam:"watching_module"` // field 14
}