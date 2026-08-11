#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TEXTMESSAGEUSERJOURNEYACTION {
    TYPINGSTART = 1,
    CLEARED = 2,
    SENT = 3,
    DRAFTSAVED = 4,
    EXIT = 5,
    CLICKONCOMPOSER = 6,
    DELIVERED = 7,
    DRAFTLOADED = 8,
}