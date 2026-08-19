#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLVIDEOSTATE {
    DISABLED = 0,
    ENABLED = 1,
    PAUSED = 2,
    UPGRADEREQUEST = 3,
    MUTED = 6,
    UNKNOWNPEER = 10,
    XR2DCODECAVATARENABLED = 12,
    ERROR = 20,
}