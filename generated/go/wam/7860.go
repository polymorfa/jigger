const WamMmSignalRealtimeWeb = 7860 // channel: private

type MmSignalRealtimeWebEvent struct {
	MmCarouselCardIndex int64 `wam:"mm_carousel_card_index"` // field 1
	MmCtaButtonIndex int64 `wam:"mm_cta_button_index"` // field 2
	MmSignalData string `wam:"mm_signal_data"` // field 3
	MmSignalType MMSIGNALTYPE `wam:"mm_signal_type"` // field 4
}