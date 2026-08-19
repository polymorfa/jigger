pub const WAM_WEBC_PAGE_RESUME: u32 = 884;

#[derive(Debug, Default)]
pub struct WebcPageResumeEvent {
    /// field 1, wire `webc_resume_count`
    pub webc_resume_count: Option<i64>,
}