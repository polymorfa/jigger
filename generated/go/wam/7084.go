const WamAboutInteraction = 7084 // channel: regular

type AboutInteractionEvent struct {
	AboutConsumptionSurface ABOUTCONSUMPTIONSURFACETYPE `wam:"about_consumption_surface"` // field 1
	AboutLocale string `wam:"about_locale"` // field 2
}