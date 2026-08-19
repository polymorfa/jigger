#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BANNEROPERATIONS {
    SHOWN = 1,
    CLICK = 2,
    DISMISS = 3,
    ELIGIBLE = 4,
    REVOKED = 5,
    RENDERED = 6,
}