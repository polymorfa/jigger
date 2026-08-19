export const WamBusinessToolsEntry = 2216 as const

export interface BusinessToolsEntryEvent {
  /** field 1, wire `business_tools_session_id` */
  businessToolsSessionId?: string
  /** field 2, wire `business_tools_sequence_number` */
  businessToolsSequenceNumber?: number
  /** field 3, wire `business_tools_entry_point` */
  businessToolsEntryPoint?: BUSINESSTOOLSENTRYPOINTTYPE
}