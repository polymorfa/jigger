export const WamBusinessToolsImpression = 2220 as const

export interface BusinessToolsImpressionEvent {
  /** field 1, wire `business_tools_session_id` */
  businessToolsSessionId?: string
  /** field 2, wire `business_tools_sequence_number` */
  businessToolsSequenceNumber?: number
  /** field 4, wire `business_tools_entry_point` */
  businessToolsEntryPoint?: BUSINESSTOOLSENTRYPOINTTYPE
}