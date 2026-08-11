const WamGroupProfilePicture = 3652 // channel: regular

type GroupProfilePictureEvent struct {
	GroupCreationDs string `wam:"group_creation_ds"` // field 1
	HasProfilePicture bool `wam:"has_profile_picture"` // field 3
	IsAdmin bool `wam:"is_admin"` // field 4
	PreciseGroupSizeBucket PRECISESIZEBUCKET `wam:"precise_group_size_bucket"` // field 5
	ProfilePictureType PROFILEPICTURETYPE `wam:"profile_picture_type"` // field 6
	GroupProfileAction GROUPPROFILEACTIONTYPE `wam:"group_profile_action"` // field 7
}