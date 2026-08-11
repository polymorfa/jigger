#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DELIVEREDPRIORITY {
    UNKNOWN = 0,
    HIGH = 1,
    NORMAL = 2,
}