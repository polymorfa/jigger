const WamArInterstitialScreenImpression = 7890 // channel: regular

type ArInterstitialScreenImpressionEvent struct {
	AccountAfterReadDuration int64 `wam:"account_after_read_duration"` // field 1
	AfterReadScreenEntryPoint AFTERREADSCREENENTRYPOINTTYPE `wam:"after_read_screen_entry_point"` // field 2
	NuxVersion int64 `wam:"nux_version"` // field 3
}