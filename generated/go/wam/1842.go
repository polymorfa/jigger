const WamStickerAddToFavorite = 1842 // channel: regular

type StickerAddToFavoriteEvent struct {
	StickerAddToFavoriteOrigin STICKERADDTOFAVORITEORIGINTYPE `wam:"sticker_add_to_favorite_origin"` // field 1
	StickerIsFirstParty bool `wam:"sticker_is_first_party"` // field 2
	StickerIsAnimated bool `wam:"sticker_is_animated"` // field 3
	StickerIsAvatar bool `wam:"sticker_is_avatar"` // field 4
	StickerIsAi bool `wam:"sticker_is_ai"` // field 5
	StickerIsFromStickerMaker bool `wam:"sticker_is_from_sticker_maker"` // field 6
	StickerMakerSourceType STICKERMAKERSOURCETYPE `wam:"sticker_maker_source_type"` // field 7
	StickerIsGiphy bool `wam:"sticker_is_giphy"` // field 8
	StickerIsTenor bool `wam:"sticker_is_tenor"` // field 9
	StickerIsFromUserCreatedPack bool `wam:"sticker_is_from_user_created_pack"` // field 10
	StickerIsKlipy bool `wam:"sticker_is_klipy"` // field 11
	StickerIsText bool `wam:"sticker_is_text"` // field 12
	StickerIsPremium bool `wam:"sticker_is_premium"` // field 13
}