#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLSIZEBUCKET {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    XLARGE = 4,
}