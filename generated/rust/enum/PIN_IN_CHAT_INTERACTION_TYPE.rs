#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PININCHATINTERACTIONTYPE {
    TAPONBANNER = 1,
    TAPONSYSTEMMESSAGE = 2,
    IMPRESSION = 3,
    EXPAND = 4,
    ROWTAP = 5,
    CONTEXTMENUOPEN = 6,
    COLLAPSE = 7,
}