#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PRIVACYSETTINGSVALUETYPE {
    NOBODY = 1,
    ONLYSHAREWITH = 2,
    MYCONTACTS = 3,
    MYCONTACTSEXCEPT = 4,
    EVERYONE = 5,
    KNOWN = 6,
    CLOSEFRIENDS = 7,
    CUSTOMLIST = 8,
    GROUPSTATUS = 9,
}