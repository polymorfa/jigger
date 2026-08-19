#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VOIPSETTINGRELEASETYPE {
    UNKNOWN = 0,
    PROD = 1,
    FALLBACK = 2,
    CANARY = 3,
}