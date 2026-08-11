#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSPRIVACYTYPE {
    ALLCONTACTS = 1,
    EXCEPT = 2,
    ONLYWITH = 3,
    CLOSEFRIENDS = 4,
    CUSTOMLIST = 5,
    GROUPSTATUS = 6,
}