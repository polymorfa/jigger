pub const WAM_DIALOG_EVENT: u32 = 7068;

#[derive(Debug, Default)]
pub struct DialogEventEvent {
    /// field 1, wire `dialog_event_source`
    pub dialog_event_source: Option<String>,
    /// field 2, wire `dialog_event_type`
    pub dialog_event_type: Option<DIALOGEVENTTYPE>,
    /// field 3, wire `dialog_name`
    pub dialog_name: Option<DIALOGNAMETYPE>,
}