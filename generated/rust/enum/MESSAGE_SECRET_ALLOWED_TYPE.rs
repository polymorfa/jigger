#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGESECRETALLOWEDTYPE {
    MESSAGEPOLL = 0,
    MESSAGEEDIT = 1,
    REACTION = 2,
    COMMENT = 3,
    EVENTRESPONSE = 4,
    MESSAGEEVENTEDIT = 5,
    MESSAGEREPORTINGTOKEN = 6,
}