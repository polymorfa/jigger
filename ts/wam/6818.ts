export const WamAboutCreation = 6818 as const

export interface AboutCreationEvent {
  /** field 1, wire `about_duration` (about_duration >= 0) */
  aboutDuration?: number
  /** field 2, wire `about_entrypoint` */
  aboutEntrypoint?: ABOUTENTRYPOINTTYPE
  /** field 3, wire `about_length` (about_length >= 0; about_length > 0; about_length == 0) */
  aboutLength?: number
  /** field 4, wire `about_locale` */
  aboutLocale?: string
  /** field 5, wire `about_overall_t` */
  aboutOverallT?: string
  /** field 6, wire `about_preset_selected` */
  aboutPresetSelected?: boolean
  /** field 7, wire `about_request_type` */
  aboutRequestType?: ABOUTREQUESTTYPE
  /** field 8, wire `preset` */
  preset?: PRESETTYPE
  /** field 9, wire `about_prompt` */
  aboutPrompt?: ABOUTPROMPTTYPE
}