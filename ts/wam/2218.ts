export const WamBusinessToolsClick = 2218 as const

export interface BusinessToolsClickEvent {
  /** field 1, wire `business_tools_session_id` */
  businessToolsSessionId?: string
  /** field 2, wire `business_tools_sequence_number` */
  businessToolsSequenceNumber?: number
  /** field 3, wire `business_tools_item` */
  businessToolsItem?: BUSINESSTOOLSITEMTYPE
  /** field 4, wire `linking_target` */
  linkingTarget?: BUSINESSTOOLSLINKEDACCOUNTTYPE
  /** field 5, wire `business_tools_entry_point` */
  businessToolsEntryPoint?: BUSINESSTOOLSENTRYPOINTTYPE
  /** field 6, wire `business_tools_entry_point_placement` */
  businessToolsEntryPointPlacement?: number
}