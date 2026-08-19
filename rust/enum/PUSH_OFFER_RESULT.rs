#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PUSHOFFERRESULT {
    UNKNOWN = 0,
    RECEIVEOFFER = 1,
    ACCEPTBEFOREOFFER = 2,
    ACCEPTENDCALL = 3,
    ACCEPTTIMEOUT = 4,
    REJECT = 5,
    TIMEOUT = 6,
    ERROR = 7,
    TERMINATEPUSH = 8,
    ACCEPTTERMINATEPUSH = 9,
}