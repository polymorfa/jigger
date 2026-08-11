export const WamAboutConsumption = 6814 as const

export interface AboutConsumptionEvent {
  /** field 1, wire `about_consumption_surface` */
  aboutConsumptionSurface?: ABOUTCONSUMPTIONSURFACETYPE
}