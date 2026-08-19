#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SEARCHDSSENDCONTENTTYPE {
    TEXT = 1,
    PHOTO = 2,
    VIDEO = 3,
    PTT = 4,
    DOCUMENT = 5,
    STICKER = 6,
    GIF = 7,
    CONTACTCARD = 8,
    LOCATION = 9,
}