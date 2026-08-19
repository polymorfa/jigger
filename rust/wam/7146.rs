pub const WAM_GUEST_UPSELL_INTERACTION: u32 = 7146;

#[derive(Debug, Default)]
pub struct GuestUpsellInteractionEvent {
    /// field 1, wire `guest_upsell_action`
    pub guest_upsell_action: Option<GUESTUPSELLACTIONTYPE>,
    /// field 2, wire `guest_upsell_entry_point`
    pub guest_upsell_entry_point: Option<GUESTUPSELLENTRYPOINTTYPE>,
}