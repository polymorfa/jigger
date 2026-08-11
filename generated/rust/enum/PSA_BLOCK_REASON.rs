#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PSABLOCKREASON {
    OTHER = 0,
    MESSAGESARENTHELPFUL = 1,
    TOOMANYMESSAGES = 2,
    ITLOOKSSUSPICIOUS = 3,
}