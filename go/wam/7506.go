const WamWebcWebtpPdfViewer = 7506 // channel: regular

type WebcWebtpPdfViewerEvent struct {
	WebtpErrorCode string `wam:"webtp_error_code"` // field 1
	WebtpErrorMessage string `wam:"webtp_error_message"` // field 2
	WebtpErrorStack string `wam:"webtp_error_stack"` // field 3
	WebtpErrorType string `wam:"webtp_error_type"` // field 4
	WebtpEvent WEBTPEVENTTYPE `wam:"webtp_event"` // field 5
	WebtpFileSize string `wam:"webtp_file_size"` // field 6
	WebtpSdkVersion string `wam:"webtp_sdk_version"` // field 7
	WebtpSessionId string `wam:"webtp_session_id"` // field 8
	WebtpSource WEBTPSOURCETYPE `wam:"webtp_source"` // field 9
	WebtpTelemetryData string `wam:"webtp_telemetry_data"` // field 10
}