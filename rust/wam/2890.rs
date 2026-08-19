pub const WAM_WEBC_MEDIA_EDITOR_SEND: u32 = 2890;

#[derive(Debug, Default)]
pub struct WebcMediaEditorSendEvent {
    /// field 1, wire `image_count`
    pub image_count: Option<i64>,
    /// field 2, wire `edited_image_count`
    pub edited_image_count: Option<i64>,
    /// field 3, wire `painted_image_count`
    pub painted_image_count: Option<i64>,
    /// field 4, wire `text_layer_count`
    pub text_layer_count: Option<i64>,
    /// field 5, wire `emoji_layer_count`
    pub emoji_layer_count: Option<i64>,
    /// field 6, wire `sticker_layer_count`
    pub sticker_layer_count: Option<i64>,
    /// field 7, wire `blur_image_count`
    pub blur_image_count: Option<i64>,
}