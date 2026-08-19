export const WamAboutInteraction = 7084 as const

export interface AboutInteractionEvent {
  /** field 1, wire `about_consumption_surface` */
  aboutConsumptionSurface?: ABOUTCONSUMPTIONSURFACETYPE
  /** field 2, wire `about_locale` */
  aboutLocale?: string
}