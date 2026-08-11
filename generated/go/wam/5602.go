const WamWaFsSingleEmojiMessageDaily = 5602 // channel: regular

type WaFsSingleEmojiMessageDailyEvent struct {
	AnimatedEmojiEnabled bool `wam:"animated_emoji_enabled"` // field 1
	AnimatedEmojiReceiveCnt int64 `wam:"animated_emoji_receive_cnt"` // field 2
	AnimatedEmojiSendCnt int64 `wam:"animated_emoji_send_cnt"` // field 3
	EmojiClickCnt int64 `wam:"emoji_click_cnt"` // field 4
	EmojiReplyCount int64 `wam:"emoji_reply_count"` // field 5
	PauseAnimationCnt int64 `wam:"pause_animation_cnt"` // field 6
	ReplayAnimationCnt int64 `wam:"replay_animation_cnt"` // field 7
	SingleEmojiReceiveCnt int64 `wam:"single_emoji_receive_cnt"` // field 8
	SingleEmojiSendCnt int64 `wam:"single_emoji_send_cnt"` // field 9
}