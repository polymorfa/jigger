const WamAboutCreation = 6818 // channel: regular

type AboutCreationEvent struct {
	AboutDuration int64 `wam:"about_duration"` // field 1 (about_duration >= 0)
	AboutEntrypoint ABOUTENTRYPOINTTYPE `wam:"about_entrypoint"` // field 2
	AboutLength int64 `wam:"about_length"` // field 3 (about_length >= 0; about_length > 0; about_length == 0)
	AboutLocale string `wam:"about_locale"` // field 4
	AboutOverallT string `wam:"about_overall_t"` // field 5
	AboutPresetSelected bool `wam:"about_preset_selected"` // field 6
	AboutRequestType ABOUTREQUESTTYPE `wam:"about_request_type"` // field 7
	Preset PRESETTYPE `wam:"preset"` // field 8
	AboutPrompt ABOUTPROMPTTYPE `wam:"about_prompt"` // field 9
}