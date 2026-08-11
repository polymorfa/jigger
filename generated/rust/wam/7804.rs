pub const WAM_MD_LINKED_DEVICES_WINDOWS_XDR: u32 = 7804;

#[derive(Debug, Default)]
pub struct MdLinkedDevicesWindowsXdrEvent {
    /// field 1, wire `md_linked_devices_windows_xdr_stage`
    pub md_linked_devices_windows_xdr_stage: Option<MDLINKEDDEVICESWINDOWSXDRSTAGE>,
    /// field 2, wire `md_xdr_debounce_timeout_in_ms`
    pub md_xdr_debounce_timeout_in_ms: Option<i64>,
    /// field 3, wire `md_xdr_error_reason`
    pub md_xdr_error_reason: Option<String>,
    /// field 4, wire `md_xdr_payload`
    pub md_xdr_payload: Option<String>,
    /// field 5, wire `md_xdr_session_uuid`
    pub md_xdr_session_uuid: Option<String>,
    /// field 6, wire `md_xdr_transport_type`
    pub md_xdr_transport_type: Option<MDXDRTRANSPORTTYPE>,
}