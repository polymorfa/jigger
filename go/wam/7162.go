const WamDyiReportDownload = 7162 // channel: regular

type DyiReportDownloadEvent struct {
	DyiDownloadSucceeded bool `wam:"dyi_download_succeeded"` // field 1
	DyiReportType DYIREPORTTYPECODE `wam:"dyi_report_type"` // field 2
	DyiDownloadErrorMessage string `wam:"dyi_download_error_message"` // field 3
}