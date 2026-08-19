const WamBugReportSession = 3850 // channel: regular

type BugReportSessionEvent struct {
	BugReportFlowAction BUGREPORTFLOWACTION `wam:"bug_report_flow_action"` // field 1
	BugReportErrorMessage string `wam:"bug_report_error_message"` // field 2
	BugReportMediaCount int64 `wam:"bug_report_media_count"` // field 3
	SubmitBugContainsTitle bool `wam:"submit_bug_contains_title"` // field 5
	SubmitBugCategory string `wam:"submit_bug_category"` // field 6
	BugReportTaskId string `wam:"bug_report_task_id"` // field 7
	BugReportImageCount int64 `wam:"bug_report_image_count"` // field 8
	BugReportNumberOfChars int64 `wam:"bug_report_number_of_chars"` // field 9
	BugReportNumberOfWords int64 `wam:"bug_report_number_of_words"` // field 10
	BugReportVideoCount int64 `wam:"bug_report_video_count"` // field 11
	BugReportingEntryPoint BUGREPORTENTRYPOINTNAME `wam:"bug_reporting_entry_point"` // field 12
	ClientServerJoinKey string `wam:"client_server_join_key"` // field 13
	BugReportingEndpoint string `wam:"bug_reporting_endpoint"` // field 14
}