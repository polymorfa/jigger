const WamInlineVideoPlaybackClosed = 2032 // channel: regular

type InlineVideoPlaybackClosedEvent struct {
	InlineVideoType INLINEVIDEOTYPE `wam:"inline_video_type"` // field 1
	InlineVideoDurationT string `wam:"inline_video_duration_t"` // field 2
	InlineVideoPlayed bool `wam:"inline_video_played"` // field 3
	InlineVideoStallT string `wam:"inline_video_stall_t"` // field 4
	InlineVideoWatchT string `wam:"inline_video_watch_t"` // field 5
	InlineVideoPlayStartT string `wam:"inline_video_play_start_t"` // field 6
	InlineVideoCancelBeforePlayStateT string `wam:"inline_video_cancel_before_play_state_t"` // field 7
	InlineVideoComplete bool `wam:"inline_video_complete"` // field 8
	InlineVideoCompletionRate int64 `wam:"inline_video_completion_rate"` // field 9
	InlineVideoCtaClick INLINEVIDEOCTACLICK `wam:"inline_video_cta_click"` // field 10
	InlineVideoError string `wam:"inline_video_error"` // field 11
	MessageType MESSAGETYPE `wam:"message_type"` // field 12
	InlineVideoHasRcat bool `wam:"inline_video_has_rcat"` // field 13
	ChatSize int64 `wam:"chat_size"` // field 14
	IsSentByMe bool `wam:"is_sent_by_me"` // field 15
	RcatSenderPlatform PLATFORMTYPE `wam:"rcat_sender_platform"` // field 16
}