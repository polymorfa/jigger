export const WamDyiReportDownload = 7162 as const

export interface DyiReportDownloadEvent {
  /** field 1, wire `dyi_download_succeeded` */
  dyiDownloadSucceeded?: boolean
  /** field 2, wire `dyi_report_type` */
  dyiReportType?: DYIREPORTTYPECODE
  /** field 3, wire `dyi_download_error_message` */
  dyiDownloadErrorMessage?: string
}