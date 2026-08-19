#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LWIDEFAULTTARGETINGSPEC {
    UNKOWN = 1,
    MATCHESTARGETINGSPEC = 2,
    DIFFERSFROMTARGETINGSPEC = 3,
}