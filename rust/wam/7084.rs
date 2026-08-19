pub const WAM_ABOUT_INTERACTION: u32 = 7084;

#[derive(Debug, Default)]
pub struct AboutInteractionEvent {
    /// field 1, wire `about_consumption_surface`
    pub about_consumption_surface: Option<ABOUTCONSUMPTIONSURFACETYPE>,
    /// field 2, wire `about_locale`
    pub about_locale: Option<String>,
}