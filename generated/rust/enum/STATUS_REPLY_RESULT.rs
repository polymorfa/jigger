#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSREPLYRESULT {
    OK = 1,
    CANCELLED = 2,
    ERRORUNKNOWN = 3,
}