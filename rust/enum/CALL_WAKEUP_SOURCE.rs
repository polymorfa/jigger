#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLWAKEUPSOURCE {
    NONE = 0,
    UNKNOWN = 1,
    APNSPUSH = 2,
    IOSVOIPPUSH = 3,
    GCMPUSH = 4,
    ONLINE = 5,
    RIMPUSH = 6,
    WNSPUSH = 7,
    GCMCALLPUSH = 8,
}