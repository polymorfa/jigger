pub const WAM_ABOUT_CREATION: u32 = 6818;

#[derive(Debug, Default)]
pub struct AboutCreationEvent {
    /// field 1, wire `about_duration` (about_duration >= 0)
    pub about_duration: Option<i64>,
    /// field 2, wire `about_entrypoint`
    pub about_entrypoint: Option<ABOUTENTRYPOINTTYPE>,
    /// field 3, wire `about_length` (about_length >= 0; about_length > 0; about_length == 0)
    pub about_length: Option<i64>,
    /// field 4, wire `about_locale`
    pub about_locale: Option<String>,
    /// field 5, wire `about_overall_t`
    pub about_overall_t: Option<String>,
    /// field 6, wire `about_preset_selected`
    pub about_preset_selected: Option<bool>,
    /// field 7, wire `about_request_type`
    pub about_request_type: Option<ABOUTREQUESTTYPE>,
    /// field 8, wire `preset`
    pub preset: Option<PRESETTYPE>,
    /// field 9, wire `about_prompt`
    pub about_prompt: Option<ABOUTPROMPTTYPE>,
}