const WamPrivacyHighlightDaily = 3522 // channel: regular

type PrivacyHighlightDailyEvent struct {
	DialogAppearCount int64 `wam:"dialog_appear_count"` // field 1
	DialogSelectCount int64 `wam:"dialog_select_count"` // field 2
	NarrativeAppearCount int64 `wam:"narrative_appear_count"` // field 3
	PrivacyHighlightCategory PRIVACYHIGHLIGHTCATEGORYENUM `wam:"privacy_highlight_category"` // field 4
	PrivacyHighlightSurface PRIVACYHIGHLIGHTSURFACEENUM `wam:"privacy_highlight_surface"` // field 5
}