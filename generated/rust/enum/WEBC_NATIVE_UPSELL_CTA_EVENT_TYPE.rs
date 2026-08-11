#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCNATIVEUPSELLCTAEVENTTYPE {
    IMPRESSION = 1,
    CTABTNCLICK = 2,
    CTADISMISS = 3,
}