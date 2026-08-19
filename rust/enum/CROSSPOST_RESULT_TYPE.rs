#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CROSSPOSTRESULTTYPE {
    OK = 1,
    USERCANCELED = 2,
    ERROR = 3,
}