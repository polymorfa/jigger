#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTATIONCOUNTBUCKET {
    ZERO = 1,
    ONE = 2,
    LT10 = 3,
    LT100 = 4,
    LT500 = 5,
    LT1K = 6,
    LT5K = 7,
    GTE5K = 8,
}