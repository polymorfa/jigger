export const WamGuestUpsellInteraction = 7146 as const

export interface GuestUpsellInteractionEvent {
  /** field 1, wire `guest_upsell_action` */
  guestUpsellAction?: GUESTUPSELLACTIONTYPE
  /** field 2, wire `guest_upsell_entry_point` */
  guestUpsellEntryPoint?: GUESTUPSELLENTRYPOINTTYPE
}