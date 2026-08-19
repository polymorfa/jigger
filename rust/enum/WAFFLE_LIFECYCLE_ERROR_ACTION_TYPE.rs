#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WAFFLELIFECYCLEERRORACTIONTYPE {
    NOTAPPLICABLE = 0,
    RETRY = 1,
    REQUESTNONCE = 2,
    PURGE = 3,
    PAUSE = 4,
    FAIL = 5,
}