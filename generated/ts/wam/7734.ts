export const WamChatExport = 7734 as const

export interface ChatExportEvent {
  /** field 1, wire `chat_type` */
  chatType?: MESSAGECHATTYPE
  /** field 2, wire `export_date_range_used` */
  exportDateRangeUsed?: number
  /** field 3, wire `export_duration_ms` */
  exportDurationMs?: number
  /** field 4, wire `export_error_reason` */
  exportErrorReason?: string
  /** field 5, wire `export_file_size_bytes` */
  exportFileSizeBytes?: number
  /** field 6, wire `export_message_count` */
  exportMessageCount?: number
  /** field 7, wire `export_mode` */
  exportMode?: EXPORTMODETYPE
  /** field 8, wire `export_result` */
  exportResult?: EXPORTRESULTTYPE
  /** field 9, wire `media_count` */
  mediaCount?: number
}