#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCSOCKETCONNECTREASONTYPE {
    PAGELOAD = 0,
    RECONNECT = 1,
}