#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EPHEMERALITYINITIATORTYPE {
    INITIATEDBYME = 1,
    INITIATEDBYOTHER = 2,
    BIZUPGRADEFBHOSTING = 3,
}