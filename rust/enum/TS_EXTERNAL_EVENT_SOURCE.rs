#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TSEXTERNALEVENTSOURCE {
    CALL = 1,
    VIDEO = 2,
    PTTRECORD = 3,
    PTTPLAY = 4,
    MESSAGESENDBACKGROUND = 5,
}