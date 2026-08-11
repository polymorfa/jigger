export const WamArInterstitialScreenImpression = 7890 as const

export interface ArInterstitialScreenImpressionEvent {
  /** field 1, wire `account_after_read_duration` */
  accountAfterReadDuration?: number
  /** field 2, wire `after_read_screen_entry_point` */
  afterReadScreenEntryPoint?: AFTERREADSCREENENTRYPOINTTYPE
  /** field 3, wire `nux_version` */
  nuxVersion?: number
}