export const WamMediaPicker = 1038 as const

export interface MediaPickerEvent {
  /** field 1, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 2, wire `media_picker_sent` */
  mediaPickerSent?: number
  /** field 3, wire `media_picker_deleted` */
  mediaPickerDeleted?: number
  /** field 4, wire `media_picker_changed` */
  mediaPickerChanged?: number
  /** field 5, wire `media_picker_sent_unchanged` */
  mediaPickerSentUnchanged?: number
  /** field 10, wire `media_picker_cropped_rotated` */
  mediaPickerCroppedRotated?: number
  /** field 11, wire `media_picker_drawing` */
  mediaPickerDrawing?: number
  /** field 12, wire `media_picker_stickers` */
  mediaPickerStickers?: number
  /** field 13, wire `media_picker_text` */
  mediaPickerText?: number
  /** field 14, wire `media_picker_origin` */
  mediaPickerOrigin?: MEDIAPICKERORIGINTYPE
  /** field 15, wire `media_picker_t` */
  mediaPickerT?: string
  /** field 16, wire `chat_recipients` */
  chatRecipients?: number
  /** field 17, wire `status_recipients` */
  statusRecipients?: number
  /** field 18, wire `media_picker_filter` */
  mediaPickerFilter?: number
  /** field 19, wire `media_picker_like_doc` */
  mediaPickerLikeDoc?: number
  /** field 20, wire `media_picker_not_like_doc` */
  mediaPickerNotLikeDoc?: number
  /** field 21, wire `media_picker_origin_third_party` */
  mediaPickerOriginThirdParty?: boolean
  /** field 22, wire `is_view_once` */
  isViewOnce?: boolean
  /** field 23, wire `photo_gallery_duration_t` */
  photoGalleryDurationT?: string
  /** field 24, wire `audience_selector_clicked` */
  audienceSelectorClicked?: boolean
  /** field 25, wire `audience_selector_updated` */
  audienceSelectorUpdated?: boolean
  /** field 26, wire `media_picker_has_location_sticker` */
  mediaPickerHasLocationSticker?: boolean
  /** field 27, wire `photo_quality_setting` */
  photoQualitySetting?: MEDIAQUALITY
  /** field 28, wire `video_quality_setting` */
  videoQualitySetting?: MEDIAQUALITY
  /** field 29, wire `media_picker_session_id` */
  mediaPickerSessionId?: string
  /** field 30, wire `picker_session_id` */
  pickerSessionId?: number
  /** field 31, wire `motion_photo_impression_count` */
  motionPhotoImpressionCount?: number
  /** field 32, wire `motion_photo_sent_count` */
  motionPhotoSentCount?: number
  /** field 33, wire `media_picker_avatar_stickers` */
  mediaPickerAvatarStickers?: number
  /** field 34, wire `hd_toggle_change` */
  hdToggleChange?: number
  /** field 35, wire `hd_toggle_eligible` */
  hdToggleEligible?: boolean
  /** field 36, wire `hd_toggle_state` */
  hdToggleState?: MEDIAQUALITY
  /** field 37, wire `caption_positions` */
  captionPositions?: string
  /** field 38, wire `has_collection_caption` */
  hasCollectionCaption?: boolean
  /** field 39, wire `item_caption_count` */
  itemCaptionCount?: number
  /** field 41, wire `is_sent_in_landscape` */
  isSentInLandscape?: boolean
  /** field 42, wire `media_picker_ar_background` */
  mediaPickerArBackground?: number
  /** field 43, wire `media_picker_ar_filter` */
  mediaPickerArFilter?: number
  /** field 44, wire `media_picker_ar_fun_effect` */
  mediaPickerArFunEffect?: number
  /** field 45, wire `number_of_ar_post_capture` */
  numberOfArPostCapture?: number
  /** field 46, wire `number_of_ar_pre_capture` */
  numberOfArPreCapture?: number
  /** field 47, wire `media_picker_iglu_lowlight` */
  mediaPickerIgluLowlight?: number
  /** field 48, wire `media_picker_iglu_touchup` */
  mediaPickerIgluTouchup?: number
  /** field 49, wire `number_of_iglu_post_capture` */
  numberOfIgluPostCapture?: number
  /** field 50, wire `number_of_iglu_pre_capture` */
  numberOfIgluPreCapture?: number
  /** field 51, wire `auto_scale_count` */
  autoScaleCount?: number
  /** field 52, wire `transform_count` */
  transformCount?: number
  /** field 53, wire `media_picker_position` */
  mediaPickerPosition?: string
  /** field 54, wire `is_fb_crossposting_enabled` */
  isFbCrosspostingEnabled?: boolean
  /** field 55, wire `is_ig_crossposting_enabled` */
  isIgCrosspostingEnabled?: boolean
}