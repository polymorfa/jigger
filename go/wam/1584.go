const WamMediaStreamPlayback = 1584 // channel: regular

type MediaStreamPlaybackEvent struct {
	OverallT string `wam:"overall_t"` // field 1
	MediaSize string `wam:"media_size"` // field 2
	MediaType MEDIATYPE `wam:"media_type"` // field 3
	BytesDownloadedStart string `wam:"bytes_downloaded_start"` // field 4
	BytesTransferred string `wam:"bytes_transferred"` // field 5
	VideoDuration int64 `wam:"video_duration"` // field 6
	InitialBufferingT string `wam:"initial_buffering_t"` // field 7
	TotalRebufferingT string `wam:"total_rebuffering_t"` // field 8
	TotalRebufferingCount int64 `wam:"total_rebuffering_count"` // field 9
	OverallPlayT string `wam:"overall_play_t"` // field 10
	PlaybackState PLAYBACKSTATETYPE `wam:"playback_state"` // field 11
	ForcedPlayCount int64 `wam:"forced_play_count"` // field 12
	SeekCount int64 `wam:"seek_count"` // field 13
	PlaybackCount int64 `wam:"playback_count"` // field 14
	DidPlay bool `wam:"did_play"` // field 15
	PlaybackOrigin PLAYBACKORIGINTYPE `wam:"playback_origin"` // field 16
	PlaybackError int64 `wam:"playback_error"` // field 17
	StatusId string `wam:"status_id"` // field 18
}