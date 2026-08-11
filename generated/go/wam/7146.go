const WamGuestUpsellInteraction = 7146 // channel: regular

type GuestUpsellInteractionEvent struct {
	GuestUpsellAction GUESTUPSELLACTIONTYPE `wam:"guest_upsell_action"` // field 1
	GuestUpsellEntryPoint GUESTUPSELLENTRYPOINTTYPE `wam:"guest_upsell_entry_point"` // field 2
}