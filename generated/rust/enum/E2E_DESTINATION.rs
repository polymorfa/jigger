#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum E2EDESTINATION {
    INDIVIDUAL = 0,
    GROUP = 1,
    LIST = 2,
    STATUS = 3,
    CHANNEL = 4,
    INTEROP = 5,
}