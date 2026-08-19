#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RESPONSETYPE {
    SUCCESS = 1,
    ERROR = 2,
}