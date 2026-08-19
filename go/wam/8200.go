const WamWebcWhatsNewImpression = 8200 // channel: regular

type WebcWhatsNewImpressionEvent struct {
	WebcWhatsNewAction WEBCWHATSNEWACTIONTYPE `wam:"webc_whats_new_action"` // field 1
	WebcWhatsNewSurface WEBCWHATSNEWSURFACETYPE `wam:"webc_whats_new_surface"` // field 2
	WebcWhatsNewTimeSpent string `wam:"webc_whats_new_time_spent"` // field 3
	WebcWhatsNewVariant int64 `wam:"webc_whats_new_variant"` // field 4
}