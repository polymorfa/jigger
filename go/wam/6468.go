const WamThreadInteractionDataIntegrity = 6468 // channel: regular

type ThreadInteractionDataIntegrityEvent struct {
	BlockReason BLOCKREASON `wam:"block_reason"` // field 1
	IsBlocked bool `wam:"is_blocked"` // field 2
	IsReported bool `wam:"is_reported"` // field 3
	SmbMarketingMessagesSpamReports int64 `wam:"smb_marketing_messages_spam_reports"` // field 4
	SpamReports int64 `wam:"spam_reports"` // field 5
	ThreadDs string `wam:"thread_ds"` // field 6
	ThreadId string `wam:"thread_id"` // field 7
	ThreadIdByLid string `wam:"thread_id_by_lid"` // field 8
	ThreadCreationDate string `wam:"thread_creation_date"` // field 9
}