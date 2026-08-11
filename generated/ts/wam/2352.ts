export const WamWebcMediaErrorUnknownDetails = 2352 as const

export interface WebcMediaErrorUnknownDetailsEvent {
  /** field 1, wire `media_id` */
  mediaId?: number
  /** field 2, wire `webc_media_operation` */
  webcMediaOperation?: WEBCMEDIAOPERATIONCODE
  /** field 3, wire `webc_media_error_name` */
  webcMediaErrorName?: string
  /** field 4, wire `webc_media_error_message` */
  webcMediaErrorMessage?: string
}