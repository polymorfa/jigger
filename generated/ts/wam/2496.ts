export const WamReceiptStanzaReceive = 2496 as const

export interface ReceiptStanzaReceiveEvent {
  /** field 1, wire `receipt_stanza_duration` */
  receiptStanzaDuration?: string
  /** field 2, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 3, wire `receipt_stanza_offline_count` */
  receiptStanzaOfflineCount?: number
  /** field 4, wire `receipt_stanza_type` */
  receiptStanzaType?: string
  /** field 5, wire `receipt_stanza_retry_ver` */
  receiptStanzaRetryVer?: number
  /** field 6, wire `receipt_stanza_has_orphaned` */
  receiptStanzaHasOrphaned?: boolean
  /** field 7, wire `receipt_stanza_total_count` */
  receiptStanzaTotalCount?: number
  /** field 8, wire `receipt_stanza_processed_count` */
  receiptStanzaProcessedCount?: number
  /** field 9, wire `receipt_stanza_stage` */
  receiptStanzaStage?: RECEIPTSTANZASTAGE
  /** field 10, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 11, wire `receipt_aggregation` */
  receiptAggregation?: RECEIPTAGGREGATIONTYPE
  /** field 12, wire `db_reads_count` */
  dbReadsCount?: number
  /** field 13, wire `db_writes_count` */
  dbWritesCount?: number
  /** field 14, wire `processing_deferred` */
  processingDeferred?: boolean
  /** field 15, wire `stanza_batch_size` */
  stanzaBatchSize?: number
  /** field 16, wire `stanza_process_count` */
  stanzaProcessCount?: number
}