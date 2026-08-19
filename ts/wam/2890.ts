export const WamWebcMediaEditorSend = 2890 as const

export interface WebcMediaEditorSendEvent {
  /** field 1, wire `image_count` */
  imageCount?: number
  /** field 2, wire `edited_image_count` */
  editedImageCount?: number
  /** field 3, wire `painted_image_count` */
  paintedImageCount?: number
  /** field 4, wire `text_layer_count` */
  textLayerCount?: number
  /** field 5, wire `emoji_layer_count` */
  emojiLayerCount?: number
  /** field 6, wire `sticker_layer_count` */
  stickerLayerCount?: number
  /** field 7, wire `blur_image_count` */
  blurImageCount?: number
}