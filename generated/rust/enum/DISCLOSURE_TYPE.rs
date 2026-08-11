#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISCLOSURETYPE {
    NONBLOCKING = 0,
    BLOCKING = 1,
    INFO = 2,
    INTHREADBLOCKING = 3,
    INTHREADBLOCKINGWITHBACK = 4,
}