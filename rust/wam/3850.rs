pub const WAM_BUG_REPORT_SESSION: u32 = 3850;

#[derive(Debug, Default)]
pub struct BugReportSessionEvent {
    /// field 1, wire `bug_report_flow_action`
    pub bug_report_flow_action: Option<BUGREPORTFLOWACTION>,
    /// field 2, wire `bug_report_error_message`
    pub bug_report_error_message: Option<String>,
    /// field 3, wire `bug_report_media_count`
    pub bug_report_media_count: Option<i64>,
    /// field 5, wire `submit_bug_contains_title`
    pub submit_bug_contains_title: Option<bool>,
    /// field 6, wire `submit_bug_category`
    pub submit_bug_category: Option<String>,
    /// field 7, wire `bug_report_task_id`
    pub bug_report_task_id: Option<String>,
    /// field 8, wire `bug_report_image_count`
    pub bug_report_image_count: Option<i64>,
    /// field 9, wire `bug_report_number_of_chars`
    pub bug_report_number_of_chars: Option<i64>,
    /// field 10, wire `bug_report_number_of_words`
    pub bug_report_number_of_words: Option<i64>,
    /// field 11, wire `bug_report_video_count`
    pub bug_report_video_count: Option<i64>,
    /// field 12, wire `bug_reporting_entry_point`
    pub bug_reporting_entry_point: Option<BUGREPORTENTRYPOINTNAME>,
    /// field 13, wire `client_server_join_key`
    pub client_server_join_key: Option<String>,
    /// field 14, wire `bug_reporting_endpoint`
    pub bug_reporting_endpoint: Option<String>,
}