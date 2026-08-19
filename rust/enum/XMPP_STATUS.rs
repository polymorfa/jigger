#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum XMPPSTATUS {
    DISCONNECTED = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    UNKNOWN = 4,
}