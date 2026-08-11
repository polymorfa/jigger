pub const WAM_WEBC_IMG_ERROR: u32 = 1700;

#[derive(Debug, Default)]
pub struct WebcImgErrorEvent {
    /// field 1, wire `webc_img_error_code`
    pub webc_img_error_code: Option<String>,
}