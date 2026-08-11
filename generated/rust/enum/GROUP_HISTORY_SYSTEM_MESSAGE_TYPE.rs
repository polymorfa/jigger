#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPHISTORYSYSTEMMESSAGETYPE {
    MANUALLYADD = 0,
    INVITELINK = 1,
    COMMUNITY = 2,
    INVITEACCEPT = 3,
    INVITEAUTOADD = 4,
    UNKNOWN = 5,
}