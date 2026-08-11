const WamWaPlusBenefitUserJourney = 7896 // channel: regular

type WaPlusBenefitUserJourneyEvent struct {
	WpbujAction WPBUJACTION `wam:"wpbuj_action"` // field 1
	WpbujBenefitStatus WPBUJBENEFITSTATUS `wam:"wpbuj_benefit_status"` // field 2
	WpbujBenefitType WPBUJBENEFITTYPE `wam:"wpbuj_benefit_type"` // field 3
	WpbujCustomFields string `wam:"wpbuj_custom_fields"` // field 4
	WpbujErrorMessage string `wam:"wpbuj_error_message"` // field 5
	WpbujOutcomeName WPBUJOUTCOMENAME `wam:"wpbuj_outcome_name"` // field 6
	WpbujSessionId string `wam:"wpbuj_session_id"` // field 7
	WpbujSource WPBUJSOURCE `wam:"wpbuj_source"` // field 8
	WpbujSurface WPBUJSURFACE `wam:"wpbuj_surface"` // field 9
	WsuaProductType WSUAPRODUCTTYPE `wam:"wsua_product_type"` // field 10
	WpbujActionTarget string `wam:"wpbuj_action_target"` // field 11
}