#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VIDEOPLAYORIGIN {
    CONVERSATION = 1,
    GALLERYPICKER = 2,
    STARREDMESSAGES = 3,
    MEDIAVIEWPAGER = 4,
    OTHERORIGIN = 5,
    CHANNELS = 6,
    STATUS = 7,
}