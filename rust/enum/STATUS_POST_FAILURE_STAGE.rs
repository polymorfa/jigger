#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSPOSTFAILURESTAGE {
    UNKNOWN = 0,
    PREKEYSFETCH = 1,
    ENCRYPT = 2,
    READYTOSEND = 3,
    WRITTENWIRE = 4,
    AWAITINGSERVERACK = 5,
    SERVERACKRECEIVED = 6,
}