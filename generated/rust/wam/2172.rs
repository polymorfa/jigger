pub const WAM_SEND_DOCUMENT: u32 = 2172;

#[derive(Debug, Default)]
pub struct SendDocumentEvent {
    /// field 1, wire `document_size`
    pub document_size: Option<String>,
    /// field 2, wire `document_type`
    pub document_type: Option<DOCUMENTTYPE>,
    /// field 3, wire `document_ext`
    pub document_ext: Option<String>,
    /// field 4, wire `document_page_size`
    pub document_page_size: Option<i64>,
}