export const WamWebcImgError = 1700 as const

export interface WebcImgErrorEvent {
  /** field 1, wire `webc_img_error_code` */
  webcImgErrorCode?: string
}