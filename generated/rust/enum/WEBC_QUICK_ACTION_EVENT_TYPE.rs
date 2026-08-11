#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCQUICKACTIONEVENTTYPE {
    SURFACEVIEW = 1,
    IMPRESSION = 2,
    TAP = 3,
}