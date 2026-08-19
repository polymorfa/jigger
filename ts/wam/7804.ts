export const WamMdLinkedDevicesWindowsXdr = 7804 as const

export interface MdLinkedDevicesWindowsXdrEvent {
  /** field 1, wire `md_linked_devices_windows_xdr_stage` */
  mdLinkedDevicesWindowsXdrStage?: MDLINKEDDEVICESWINDOWSXDRSTAGE
  /** field 2, wire `md_xdr_debounce_timeout_in_ms` */
  mdXdrDebounceTimeoutInMs?: number
  /** field 3, wire `md_xdr_error_reason` */
  mdXdrErrorReason?: string
  /** field 4, wire `md_xdr_payload` */
  mdXdrPayload?: string
  /** field 5, wire `md_xdr_session_uuid` */
  mdXdrSessionUuid?: string
  /** field 6, wire `md_xdr_transport_type` */
  mdXdrTransportType?: MDXDRTRANSPORTTYPE
}