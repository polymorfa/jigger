pub const WAM_ABOUT_CREATION_DAILY: u32 = 6820;

#[derive(Debug, Default)]
pub struct AboutCreationDailyEvent {
    /// field 1, wire `about_creation_started` (about_creation_started >= 0)
    pub about_creation_started: Option<i64>,
    /// field 2, wire `about_creation_visit` (about_creation_visit >= 0)
    pub about_creation_visit: Option<i64>,
    /// field 3, wire `about_entrypoint`
    pub about_entrypoint: Option<ABOUTENTRYPOINTTYPE>,
    /// field 4, wire `about_failure_count` (about_failure_count >= 0)
    pub about_failure_count: Option<i64>,
    /// field 5, wire `about_locale`
    pub about_locale: Option<String>,
    /// field 6, wire `about_success_count` (about_success_count >= 0)
    pub about_success_count: Option<i64>,
}