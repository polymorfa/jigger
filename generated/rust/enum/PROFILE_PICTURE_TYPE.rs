#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PROFILEPICTURETYPE {
    PHOTOCAMERA = 1,
    PHOTOUPLOAD = 2,
    WEBSEARCH = 3,
    EMOJI = 4,
    STICKER = 5,
    REMOVEPHOTO = 6,
}