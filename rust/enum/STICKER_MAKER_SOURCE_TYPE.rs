#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STICKERMAKERSOURCETYPE {
    CUTOUTIMAGE = 1,
    WEBSTICKERMAKER = 2,
    IOSSTICKERMAKER = 3,
    ANDROIDSTICKERMAKER = 4,
    TRANSPARENTIMAGE = 5,
    GIF = 6,
}