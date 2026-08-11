export const WamBugReportSession = 3850 as const

export interface BugReportSessionEvent {
  /** field 1, wire `bug_report_flow_action` */
  bugReportFlowAction?: BUGREPORTFLOWACTION
  /** field 2, wire `bug_report_error_message` */
  bugReportErrorMessage?: string
  /** field 3, wire `bug_report_media_count` */
  bugReportMediaCount?: number
  /** field 5, wire `submit_bug_contains_title` */
  submitBugContainsTitle?: boolean
  /** field 6, wire `submit_bug_category` */
  submitBugCategory?: string
  /** field 7, wire `bug_report_task_id` */
  bugReportTaskId?: string
  /** field 8, wire `bug_report_image_count` */
  bugReportImageCount?: number
  /** field 9, wire `bug_report_number_of_chars` */
  bugReportNumberOfChars?: number
  /** field 10, wire `bug_report_number_of_words` */
  bugReportNumberOfWords?: number
  /** field 11, wire `bug_report_video_count` */
  bugReportVideoCount?: number
  /** field 12, wire `bug_reporting_entry_point` */
  bugReportingEntryPoint?: BUGREPORTENTRYPOINTNAME
  /** field 13, wire `client_server_join_key` */
  clientServerJoinKey?: string
  /** field 14, wire `bug_reporting_endpoint` */
  bugReportingEndpoint?: string
}