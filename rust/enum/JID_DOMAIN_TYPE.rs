#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum JIDDOMAINTYPE {
    SWHATSAPPNET = 0,
    CUS = 1,
    LID = 2,
    MSGR = 3,
    INTEROP = 4,
    INTEROPMSGR = 5,
    GUS = 6,
    BOT = 7,
    BROADCAST = 8,
    NEWSLETTER = 9,
    CALL = 10,
    HPHONE = 11,
    NONEUS = 12,
    ERRORUS = 13,
    NONE = 14,
}