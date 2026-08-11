#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ESRSENDRESULTTYPE {
    SUCCESS = 1,
    ERROR = 2,
}