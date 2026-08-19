#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STANZATYPE {
    MESSAGE = 1,
    RECEIPT = 2,
    CALL = 3,
    NOTIFICATION = 4,
    APPDATA = 5,
    STATUS = 6,
}