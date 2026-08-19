export const WamWebcWebtpPdfViewer = 7506 as const

export interface WebcWebtpPdfViewerEvent {
  /** field 1, wire `webtp_error_code` */
  webtpErrorCode?: string
  /** field 2, wire `webtp_error_message` */
  webtpErrorMessage?: string
  /** field 3, wire `webtp_error_stack` */
  webtpErrorStack?: string
  /** field 4, wire `webtp_error_type` */
  webtpErrorType?: string
  /** field 5, wire `webtp_event` */
  webtpEvent?: WEBTPEVENTTYPE
  /** field 6, wire `webtp_file_size` */
  webtpFileSize?: string
  /** field 7, wire `webtp_sdk_version` */
  webtpSdkVersion?: string
  /** field 8, wire `webtp_session_id` */
  webtpSessionId?: string
  /** field 9, wire `webtp_source` */
  webtpSource?: WEBTPSOURCETYPE
  /** field 10, wire `webtp_telemetry_data` */
  webtpTelemetryData?: string
}