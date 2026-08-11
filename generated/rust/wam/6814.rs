pub const WAM_ABOUT_CONSUMPTION: u32 = 6814;

#[derive(Debug, Default)]
pub struct AboutConsumptionEvent {
    /// field 1, wire `about_consumption_surface`
    pub about_consumption_surface: Option<ABOUTCONSUMPTIONSURFACETYPE>,
}