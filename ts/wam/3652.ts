export const WamGroupProfilePicture = 3652 as const

export interface GroupProfilePictureEvent {
  /** field 1, wire `group_creation_ds` */
  groupCreationDs?: string
  /** field 3, wire `has_profile_picture` */
  hasProfilePicture?: boolean
  /** field 4, wire `is_admin` */
  isAdmin?: boolean
  /** field 5, wire `precise_group_size_bucket` */
  preciseGroupSizeBucket?: PRECISESIZEBUCKET
  /** field 6, wire `profile_picture_type` */
  profilePictureType?: PROFILEPICTURETYPE
  /** field 7, wire `group_profile_action` */
  groupProfileAction?: GROUPPROFILEACTIONTYPE
}