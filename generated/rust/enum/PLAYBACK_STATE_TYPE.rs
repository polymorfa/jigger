#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PLAYBACKSTATETYPE {
    IDLE = 1,
    READYPLAY = 2,
    READYPAUSE = 3,
    BUFFERING = 4,
    OUTSIDE = 5,
    ENDED = 6,
    ERROR = 7,
}