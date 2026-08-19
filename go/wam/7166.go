const WamDyiReportRequest = 7166 // channel: regular

type DyiReportRequestEvent struct {
	DyiReportType DYIREPORTTYPECODE `wam:"dyi_report_type"` // field 1
	DyiTriggerType DYITRIGGERTYPECODE `wam:"dyi_trigger_type"` // field 2
	DyiRequestErrorMessage string `wam:"dyi_request_error_message"` // field 3
	DyiRequestSuccess bool `wam:"dyi_request_success"` // field 4
}