export const WamAudienceManagement = 7900 as const

export interface AudienceManagementEvent {
  /** field 1, wire `audience_event_surface` */
  audienceEventSurface?: AUDIENCEEVENTSURFACETYPE
  /** field 2, wire `audience_extra_data` */
  audienceExtraData?: string
  /** field 3, wire `audience_management_action` */
  audienceManagementAction?: AUDIENCEMANAGEMENTACTIONTYPE
  /** field 4, wire `audience_predicate_type` */
  audiencePredicateType?: AUDIENCEPREDICATETYPEENUM
  /** field 5, wire `audience_resolution_trigger` */
  audienceResolutionTrigger?: AUDIENCERESOLUTIONTRIGGERTYPE
}