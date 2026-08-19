const WamEditBusinessProfile = 1466 // channel: regular

type EditBusinessProfileEvent struct {
	EditProfileAction EDITPROFILEACTION `wam:"edit_profile_action"` // field 1
	EditBusinessProfileSessionId string `wam:"edit_business_profile_session_id"` // field 2
	HasDescription bool `wam:"has_description"` // field 3
	HasCategory bool `wam:"has_category"` // field 4
	HasAddress bool `wam:"has_address"` // field 5
	HasHours bool `wam:"has_hours"` // field 6
	HasEmail bool `wam:"has_email"` // field 7
	HasWebsite bool `wam:"has_website"` // field 8
	EditProfileActionField BUSINESSPROFILEFIELD `wam:"edit_profile_action_field"` // field 9
	BusinessProfileEntryPoint BUSINESSPROFILEENTRYPOINT `wam:"business_profile_entry_point"` // field 10
	HasPaymentInfo bool `wam:"has_payment_info"` // field 11
	HasConnectedFbMedia bool `wam:"has_connected_fb_media"` // field 12
	HasConnectedIgMedia bool `wam:"has_connected_ig_media"` // field 13
}