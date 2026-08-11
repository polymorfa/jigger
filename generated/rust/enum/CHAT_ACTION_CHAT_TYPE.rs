#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATACTIONCHATTYPE {
    INDIVIDUAL = 1,
    GROUP = 2,
    BUSINESS = 3,
    BROADCASTLIST = 4,
    CHANNEL = 5,
}