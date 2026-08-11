pub const WAM_DYI_REPORT_REQUEST: u32 = 7166;

#[derive(Debug, Default)]
pub struct DyiReportRequestEvent {
    /// field 1, wire `dyi_report_type`
    pub dyi_report_type: Option<DYIREPORTTYPECODE>,
    /// field 2, wire `dyi_trigger_type`
    pub dyi_trigger_type: Option<DYITRIGGERTYPECODE>,
    /// field 3, wire `dyi_request_error_message`
    pub dyi_request_error_message: Option<String>,
    /// field 4, wire `dyi_request_success`
    pub dyi_request_success: Option<bool>,
}