pub const WAM_DYI_REPORT_DOWNLOAD: u32 = 7162;

#[derive(Debug, Default)]
pub struct DyiReportDownloadEvent {
    /// field 1, wire `dyi_download_succeeded`
    pub dyi_download_succeeded: Option<bool>,
    /// field 2, wire `dyi_report_type`
    pub dyi_report_type: Option<DYIREPORTTYPECODE>,
    /// field 3, wire `dyi_download_error_message`
    pub dyi_download_error_message: Option<String>,
}