#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSINTERACTIONRESULTTYPE {
    OK = 1,
    REVOKED = 2,
    ERRORUNKNOWN = 3,
}