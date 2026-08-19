export const WamStickerSend = 1840 as const

export interface StickerSendEvent {
  /** field 1, wire `sticker_send_origin` */
  stickerSendOrigin?: STICKERSENDORIGINTYPE
  /** field 2, wire `sticker_is_first_party` */
  stickerIsFirstParty?: boolean
  /** field 3, wire `sticker_is_animated` */
  stickerIsAnimated?: boolean
  /** field 4, wire `sticker_send_message_type` */
  stickerSendMessageType?: STICKERSENDMESSAGETYPE
  /** field 5, wire `sticker_is_from_sticker_maker` */
  stickerIsFromStickerMaker?: boolean
  /** field 6, wire `sticker_is_avatar` */
  stickerIsAvatar?: boolean
  /** field 7, wire `sticker_is_ai` */
  stickerIsAi?: boolean
  /** field 8, wire `sticker_maker_source_type` */
  stickerMakerSourceType?: STICKERMAKERSOURCETYPE
  /** field 9, wire `sticker_is_lottie` */
  stickerIsLottie?: boolean
  /** field 10, wire `sticker_is_giphy` */
  stickerIsGiphy?: boolean
  /** field 11, wire `sticker_is_tenor` */
  stickerIsTenor?: boolean
  /** field 12, wire `sticker_is_from_user_created_pack` */
  stickerIsFromUserCreatedPack?: boolean
  /** field 13, wire `sticker_is_klipy` */
  stickerIsKlipy?: boolean
  /** field 14, wire `sticker_is_text` */
  stickerIsText?: boolean
  /** field 15, wire `sticker_is_premium` */
  stickerIsPremium?: boolean
}