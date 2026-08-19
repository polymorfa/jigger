pub const WAM_STICKER_ADD_TO_FAVORITE: u32 = 1842;

#[derive(Debug, Default)]
pub struct StickerAddToFavoriteEvent {
    /// field 1, wire `sticker_add_to_favorite_origin`
    pub sticker_add_to_favorite_origin: Option<STICKERADDTOFAVORITEORIGINTYPE>,
    /// field 2, wire `sticker_is_first_party`
    pub sticker_is_first_party: Option<bool>,
    /// field 3, wire `sticker_is_animated`
    pub sticker_is_animated: Option<bool>,
    /// field 4, wire `sticker_is_avatar`
    pub sticker_is_avatar: Option<bool>,
    /// field 5, wire `sticker_is_ai`
    pub sticker_is_ai: Option<bool>,
    /// field 6, wire `sticker_is_from_sticker_maker`
    pub sticker_is_from_sticker_maker: Option<bool>,
    /// field 7, wire `sticker_maker_source_type`
    pub sticker_maker_source_type: Option<STICKERMAKERSOURCETYPE>,
    /// field 8, wire `sticker_is_giphy`
    pub sticker_is_giphy: Option<bool>,
    /// field 9, wire `sticker_is_tenor`
    pub sticker_is_tenor: Option<bool>,
    /// field 10, wire `sticker_is_from_user_created_pack`
    pub sticker_is_from_user_created_pack: Option<bool>,
    /// field 11, wire `sticker_is_klipy`
    pub sticker_is_klipy: Option<bool>,
    /// field 12, wire `sticker_is_text`
    pub sticker_is_text: Option<bool>,
    /// field 13, wire `sticker_is_premium`
    pub sticker_is_premium: Option<bool>,
}