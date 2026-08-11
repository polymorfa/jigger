#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UPDATESTABSEARCHRESULTTYPE {
    STATUS = 0,
    FOLLOWEDCHANNELS = 1,
    OTHERCHANNELS = 2,
    SEARCHQUERY = 3,
    CONTACT = 4,
}