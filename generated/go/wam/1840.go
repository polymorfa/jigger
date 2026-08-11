const WamStickerSend = 1840 // channel: regular

type StickerSendEvent struct {
	StickerSendOrigin STICKERSENDORIGINTYPE `wam:"sticker_send_origin"` // field 1
	StickerIsFirstParty bool `wam:"sticker_is_first_party"` // field 2
	StickerIsAnimated bool `wam:"sticker_is_animated"` // field 3
	StickerSendMessageType STICKERSENDMESSAGETYPE `wam:"sticker_send_message_type"` // field 4
	StickerIsFromStickerMaker bool `wam:"sticker_is_from_sticker_maker"` // field 5
	StickerIsAvatar bool `wam:"sticker_is_avatar"` // field 6
	StickerIsAi bool `wam:"sticker_is_ai"` // field 7
	StickerMakerSourceType STICKERMAKERSOURCETYPE `wam:"sticker_maker_source_type"` // field 8
	StickerIsLottie bool `wam:"sticker_is_lottie"` // field 9
	StickerIsGiphy bool `wam:"sticker_is_giphy"` // field 10
	StickerIsTenor bool `wam:"sticker_is_tenor"` // field 11
	StickerIsFromUserCreatedPack bool `wam:"sticker_is_from_user_created_pack"` // field 12
	StickerIsKlipy bool `wam:"sticker_is_klipy"` // field 13
	StickerIsText bool `wam:"sticker_is_text"` // field 14
	StickerIsPremium bool `wam:"sticker_is_premium"` // field 15
}