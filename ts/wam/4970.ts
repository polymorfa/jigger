export const WamSupportAiSession = 4970 as const

export interface SupportAiSessionEvent {
  /** field 1, wire `support_ai_event_type` */
  supportAiEventType?: SUPPORTAIEVENTTYPE
  /** field 3, wire `support_ai_error_code` */
  supportAiErrorCode?: number
  /** field 4, wire `support_ai_error_message` */
  supportAiErrorMessage?: string
  /** field 5, wire `citation_cms_id` */
  citationCmsId?: string
}