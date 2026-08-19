#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ONBOARDSOURCES {
    DEFAULT = 1,
    BACKGROUNDSYNCBUTTERBAR = 2,
    WEBNOTIFICATIONBUTTERBAR = 3,
    INAPPSETTING = 4,
    AUTOENABLE = 5,
}