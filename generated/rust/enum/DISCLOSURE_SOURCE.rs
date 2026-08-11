#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISCLOSURESOURCE {
    BLOCKING = 0,
    NONBLOCKING = 1,
    INFO = 2,
}