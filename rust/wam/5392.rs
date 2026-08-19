pub const WAM_WEBC_PAGE_LOAD2: u32 = 5392;

#[derive(Debug, Default)]
pub struct WebcPageLoad2Event {
    /// field 1, wire `webc_page_load_id`
    pub webc_page_load_id: Option<String>,
}