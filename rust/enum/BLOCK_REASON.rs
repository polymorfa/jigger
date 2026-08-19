#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BLOCKREASON {
    OTHER = 0,
    NOLONGERNEEDED = 1,
    NOSIGNUP = 2,
    SPAM = 3,
    OFFENSIVEMESSAGES = 4,
    OTPDIDNOTREQUEST = 5,
    SCAMORFRAUD = 6,
    DONTRECOGNIZE = 7,
}