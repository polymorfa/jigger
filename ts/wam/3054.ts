export const WamWebcJobInfo = 3054 as const

export interface WebcJobInfoEvent {
  /** field 1, wire `job_name` */
  jobName?: string
  /** field 2, wire `job_priority` */
  jobPriority?: string
  /** field 3, wire `scenario` */
  scenario?: WEBCSCENARIOTYPE
  /** field 4, wire `pending_jobs_count` */
  pendingJobsCount?: number
  /** field 5, wire `job_result_type` */
  jobResultType?: WEBCJOBRESULTTYPECODE
  /** field 6, wire `webc_job_added_t` */
  webcJobAddedT?: number
  /** field 7, wire `webc_job_started_t` */
  webcJobStartedT?: number
  /** field 8, wire `webc_job_completed_t` */
  webcJobCompletedT?: number
}