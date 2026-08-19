export const WamAboutCreationDaily = 6820 as const

export interface AboutCreationDailyEvent {
  /** field 1, wire `about_creation_started` (about_creation_started >= 0) */
  aboutCreationStarted?: number
  /** field 2, wire `about_creation_visit` (about_creation_visit >= 0) */
  aboutCreationVisit?: number
  /** field 3, wire `about_entrypoint` */
  aboutEntrypoint?: ABOUTENTRYPOINTTYPE
  /** field 4, wire `about_failure_count` (about_failure_count >= 0) */
  aboutFailureCount?: number
  /** field 5, wire `about_locale` */
  aboutLocale?: string
  /** field 6, wire `about_success_count` (about_success_count >= 0) */
  aboutSuccessCount?: number
}