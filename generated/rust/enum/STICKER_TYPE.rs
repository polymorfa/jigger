#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STICKERTYPE {
    UNKNOWN = 0,
    ARROW = 1,
    OVAL = 2,
    RECT = 3,
    THINKINGBUBBLE = 4,
    SPEECHBUBBLEOVAL = 5,
    SPEECHBUBBLERECT = 6,
    DIGITALCLOCK = 7,
    ANALOGCLOCK = 8,
    LOCATION = 9,
    ADDYOURS = 10,
    NORMALSTICKER = 11,
    EMOJISTICKER = 12,
    PHOTO = 13,
    MUSIC = 14,
    STATUSAPI = 15,
    QUESTION = 16,
    QUESTIONANSWER = 17,
    REACTIONSTICKER = 18,
    NYE2026 = 19,
}