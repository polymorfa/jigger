const WamWebcJobInfo = 3054 // channel: regular

type WebcJobInfoEvent struct {
	JobName string `wam:"job_name"` // field 1
	JobPriority string `wam:"job_priority"` // field 2
	Scenario WEBCSCENARIOTYPE `wam:"scenario"` // field 3
	PendingJobsCount int64 `wam:"pending_jobs_count"` // field 4
	JobResultType WEBCJOBRESULTTYPECODE `wam:"job_result_type"` // field 5
	WebcJobAddedT int64 `wam:"webc_job_added_t"` // field 6
	WebcJobStartedT int64 `wam:"webc_job_started_t"` // field 7
	WebcJobCompletedT int64 `wam:"webc_job_completed_t"` // field 8
}