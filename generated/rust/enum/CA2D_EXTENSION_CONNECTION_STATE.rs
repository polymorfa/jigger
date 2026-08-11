#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CA2DEXTENSIONCONNECTIONSTATE {
    NONE = 0,
    CREATING = 1,
    CREATED = 2,
    CONNECTING = 3,
    CONNECTED = 4,
    REMOVED = 5,
    FAILED = 6,
}