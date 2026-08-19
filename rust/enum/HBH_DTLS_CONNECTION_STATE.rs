#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum HBHDTLSCONNECTIONSTATE {
    NONE = 0,
    INITED = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    CLOSED = 4,
    ERROR = 5,
}