export const WamStatusReportingEvents = 3920 as const

export interface StatusReportingEventsEvent {
  /** field 1, wire `status_report_interaction` */
  statusReportInteraction?: STATUSREPORTINTERACTION
  /** field 2, wire `status_poster_contact_type` */
  statusPosterContactType?: STATUSPOSTERCONTACTTYPE
}