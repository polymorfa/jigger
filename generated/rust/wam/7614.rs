pub const WAM_USERNAME_EXPOSED: u32 = 7614;

#[derive(Debug, Default)]
pub struct UsernameExposedEvent {
    /// field 1, wire `username_exposure_context`
    pub username_exposure_context: Option<String>,
}