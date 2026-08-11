const WamMdLinkedDevicesWindowsXdr = 7804 // channel: regular

type MdLinkedDevicesWindowsXdrEvent struct {
	MdLinkedDevicesWindowsXdrStage MDLINKEDDEVICESWINDOWSXDRSTAGE `wam:"md_linked_devices_windows_xdr_stage"` // field 1
	MdXdrDebounceTimeoutInMs int64 `wam:"md_xdr_debounce_timeout_in_ms"` // field 2
	MdXdrErrorReason string `wam:"md_xdr_error_reason"` // field 3
	MdXdrPayload string `wam:"md_xdr_payload"` // field 4
	MdXdrSessionUuid string `wam:"md_xdr_session_uuid"` // field 5
	MdXdrTransportType MDXDRTRANSPORTTYPE `wam:"md_xdr_transport_type"` // field 6
}