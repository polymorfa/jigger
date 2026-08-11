#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSREPLYMESSAGETYPE {
    UNKNOWN = 1,
    TEXT = 2,
    IMAGE = 3,
    VOICE = 4,
    DOCUMENT = 5,
    AUDIO = 6,
    STICKER = 7,
    LOCATION = 8,
    PRODUCT = 9,
    CONTACT = 10,
    CONTACTARRAY = 11,
    CAMERACAPTUREIMAGE = 12,
    MEDIAGALLERY = 13,
    GIFVIDEO = 14,
    QUICKREPLY = 15,
    POLL = 16,
    AVATARQUICKREPLY = 17,
    STICKERQUICKREPLY = 18,
}