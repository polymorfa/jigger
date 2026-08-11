pub const WAM_WEBC_JOB_INFO: u32 = 3054;

#[derive(Debug, Default)]
pub struct WebcJobInfoEvent {
    /// field 1, wire `job_name`
    pub job_name: Option<String>,
    /// field 2, wire `job_priority`
    pub job_priority: Option<String>,
    /// field 3, wire `scenario`
    pub scenario: Option<WEBCSCENARIOTYPE>,
    /// field 4, wire `pending_jobs_count`
    pub pending_jobs_count: Option<i64>,
    /// field 5, wire `job_result_type`
    pub job_result_type: Option<WEBCJOBRESULTTYPECODE>,
    /// field 6, wire `webc_job_added_t`
    pub webc_job_added_t: Option<i64>,
    /// field 7, wire `webc_job_started_t`
    pub webc_job_started_t: Option<i64>,
    /// field 8, wire `webc_job_completed_t`
    pub webc_job_completed_t: Option<i64>,
}