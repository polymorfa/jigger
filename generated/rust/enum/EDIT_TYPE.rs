#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EDITTYPE {
    NOTEDITED = 0,
    EDITED = 1,
    SENDERREVOKE = 2,
    ADMINREVOKE = 3,
    ADMINEDIT = 4,
    PIN = 5,
}