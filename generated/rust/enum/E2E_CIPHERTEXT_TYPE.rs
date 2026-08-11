#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum E2ECIPHERTEXTTYPE {
    MESSAGE = 0,
    PREKEYMESSAGE = 1,
    SENDERKEYMESSAGE = 2,
    MESSAGESECRETMESSAGE = 3,
}