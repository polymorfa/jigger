#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONSUMERBIZACTIONTYPEENUM {
    IMPRESSION = 0,
    TAP = 1,
    SCROLL = 2,
    LONGPRESS = 3,
    SWIPE = 4,
    CLICK = 5,
    VIEW = 6,
    OPENCHAT = 7,
}