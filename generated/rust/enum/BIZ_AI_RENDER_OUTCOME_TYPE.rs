#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BIZAIRENDEROUTCOMETYPE {
    SUCCESS = 0,
    FALLBACK = 1,
    ERROR = 2,
}