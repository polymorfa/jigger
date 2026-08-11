const WamChatExport = 7734 // channel: regular

type ChatExportEvent struct {
	ChatType MESSAGECHATTYPE `wam:"chat_type"` // field 1
	ExportDateRangeUsed int64 `wam:"export_date_range_used"` // field 2
	ExportDurationMs int64 `wam:"export_duration_ms"` // field 3
	ExportErrorReason string `wam:"export_error_reason"` // field 4
	ExportFileSizeBytes int64 `wam:"export_file_size_bytes"` // field 5
	ExportMessageCount int64 `wam:"export_message_count"` // field 6
	ExportMode EXPORTMODETYPE `wam:"export_mode"` // field 7
	ExportResult EXPORTRESULTTYPE `wam:"export_result"` // field 8
	MediaCount int64 `wam:"media_count"` // field 9
}