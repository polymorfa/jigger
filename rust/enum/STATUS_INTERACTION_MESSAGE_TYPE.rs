#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSINTERACTIONMESSAGETYPE {
    LIKE = 1,
    EMOJI = 2,
    TEXT = 3,
    IMAGE = 4,
    VOICE = 5,
    STICKER = 6,
    LOCATION = 7,
    CONTACT = 8,
    CAMERACAPTUREIMAGE = 9,
}