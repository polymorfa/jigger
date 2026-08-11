#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SEARCHUJCRITERIATYPE {
    TEXTMATCHFILTER = 1,
    UNREADFILTER = 2,
    MEDIATYPEFILTER = 3,
    CONTACTFILTER = 4,
    NONCONTACTSFILTER = 5,
    BUSINESSFILTER = 6,
    OTHER = 7,
}