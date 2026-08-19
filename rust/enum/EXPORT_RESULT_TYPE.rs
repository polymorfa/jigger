#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EXPORTRESULTTYPE {
    SUCCESS = 1,
    CANCELLED = 2,
    ERROR = 3,
}