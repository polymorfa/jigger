export const WamUsernameExposed = 7614 as const

export interface UsernameExposedEvent {
  /** field 1, wire `username_exposure_context` */
  usernameExposureContext?: string
}