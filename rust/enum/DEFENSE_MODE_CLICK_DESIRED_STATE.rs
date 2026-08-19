#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEFENSEMODECLICKDESIREDSTATE {
    NOBODY = 1,
    ONLYSHAREWITH = 2,
    MYCONTACTS = 3,
    MYCONTACTSEXCEPT = 4,
    EVERYONE = 5,
    KNOWN = 6,
    CLOSEFRIENDS = 7,
    MATCHLASTSEEN = 11,
    OFF = 8,
    ON = 9,
    ONSTANDARD = 10,
}