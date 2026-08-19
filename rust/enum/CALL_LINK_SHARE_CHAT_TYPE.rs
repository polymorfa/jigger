#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLLINKSHARECHATTYPE {
    INDIVIDUAL = 1,
    BUSINESS = 2,
    GROUPLARGE = 3,
    GROUP3P = 4,
    GROUP8P = 5,
    GROUP32P = 6,
}