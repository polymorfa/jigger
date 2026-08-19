#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATSEARCHRESULTTYPE {
    CONTACT = 0,
    CHAT = 1,
    GROUP = 2,
    BROADCASTLIST = 3,
    MESSAGE = 4,
    BUSINESS = 5,
    GROUPINCOMMON = 6,
}