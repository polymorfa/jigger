const WamQuickReply = 1468 // channel: regular

type QuickReplyEvent struct {
	QuickReplyAction QUICKREPLYACTION `wam:"quick_reply_action"` // field 1
	QuickReplyCount int64 `wam:"quick_reply_count"` // field 2
	QuickReplyKeywordCount int64 `wam:"quick_reply_keyword_count"` // field 3
	QuickReplyKeywordMatched bool `wam:"quick_reply_keyword_matched"` // field 4
	AttachmentImageCount int64 `wam:"attachment_image_count"` // field 5
	AttachmentVideoCount int64 `wam:"attachment_video_count"` // field 6
	AttachmentGifCount int64 `wam:"attachment_gif_count"` // field 7
	QuickReplyTranscodeResult QUICKREPLYTRANSCODERESULT `wam:"quick_reply_transcode_result"` // field 8
	QuickReplyOrigin QUICKREPLYORIGIN `wam:"quick_reply_origin"` // field 9
	IsSmartDefault bool `wam:"is_smart_default"` // field 10
	QuickReplyEntryPoint QUICKREPLYENTRYPOINT `wam:"quick_reply_entry_point"` // field 11
	LabelThreadId string `wam:"label_thread_id"` // field 12
	ThreadEntryPoint string `wam:"thread_entry_point"` // field 13
	ThreadCreationDate string `wam:"thread_creation_date"` // field 14
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 15
	LastMessageDirection LASTMESSAGEDIRECTION `wam:"last_message_direction"` // field 16
	MessageDepth int64 `wam:"message_depth"` // field 17
	QuickReplyType QUICKREPLYTYPE `wam:"quick_reply_type"` // field 19
	ListIds string `wam:"list_ids"` // field 20
}