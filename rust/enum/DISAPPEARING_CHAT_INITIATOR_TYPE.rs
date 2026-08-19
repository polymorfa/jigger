#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISAPPEARINGCHATINITIATORTYPE {
    CHAT = 1,
    INITIATEDBYME = 2,
    INITIATEDBYOTHER = 3,
    CHATPICKER = 4,
    BIZUPGRADEFBHOSTING = 5,
}