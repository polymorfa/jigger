#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum APPLAUNCHDESTINATIONTYPE {
    CHATLIST = 1,
    CHAT = 2,
    SHARE = 3,
    CALL = 4,
    CHANNEL = 5,
}