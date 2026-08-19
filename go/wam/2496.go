const WamReceiptStanzaReceive = 2496 // channel: regular

type ReceiptStanzaReceiveEvent struct {
	ReceiptStanzaDuration string `wam:"receipt_stanza_duration"` // field 1
	MediaType MEDIATYPE `wam:"media_type"` // field 2
	ReceiptStanzaOfflineCount int64 `wam:"receipt_stanza_offline_count"` // field 3
	ReceiptStanzaType string `wam:"receipt_stanza_type"` // field 4
	ReceiptStanzaRetryVer int64 `wam:"receipt_stanza_retry_ver"` // field 5
	ReceiptStanzaHasOrphaned bool `wam:"receipt_stanza_has_orphaned"` // field 6
	ReceiptStanzaTotalCount int64 `wam:"receipt_stanza_total_count"` // field 7
	ReceiptStanzaProcessedCount int64 `wam:"receipt_stanza_processed_count"` // field 8
	ReceiptStanzaStage RECEIPTSTANZASTAGE `wam:"receipt_stanza_stage"` // field 9
	MessageType MESSAGETYPE `wam:"message_type"` // field 10
	ReceiptAggregation RECEIPTAGGREGATIONTYPE `wam:"receipt_aggregation"` // field 11
	DbReadsCount int64 `wam:"db_reads_count"` // field 12
	DbWritesCount int64 `wam:"db_writes_count"` // field 13
	ProcessingDeferred bool `wam:"processing_deferred"` // field 14
	StanzaBatchSize int64 `wam:"stanza_batch_size"` // field 15
	StanzaProcessCount int64 `wam:"stanza_process_count"` // field 16
}