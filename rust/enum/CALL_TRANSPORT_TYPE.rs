#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLTRANSPORTTYPE {
    UNKNOWN = 0,
    P2P = 1,
    UDPRELAY = 2,
    TCPRELAY = 3,
    MIXED = 4,
}