export const WamDyiReportRequest = 7166 as const

export interface DyiReportRequestEvent {
  /** field 1, wire `dyi_report_type` */
  dyiReportType?: DYIREPORTTYPECODE
  /** field 2, wire `dyi_trigger_type` */
  dyiTriggerType?: DYITRIGGERTYPECODE
  /** field 3, wire `dyi_request_error_message` */
  dyiRequestErrorMessage?: string
  /** field 4, wire `dyi_request_success` */
  dyiRequestSuccess?: boolean
}