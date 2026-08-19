#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIENCEPREDICATETYPEENUM {
    UNKNOWN = 0,
    EXPLICIT = 1,
    CHATTEDRECENTLY = 2,
    NOTMESSAGEDRECENTLY = 3,
    LARGESTLIST = 4,
    ALLCONTACTS = 5,
    LABEL = 6,
}