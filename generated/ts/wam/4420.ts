export const WamReportToAdminEvents = 4420 as const

export interface ReportToAdminEventsEvent {
  /** field 1, wire `report_to_admin_interaction` */
  reportToAdminInteraction?: REPORTTOADMININTERACTION
  /** field 2, wire `rta_group_id` */
  rtaGroupId?: string
}