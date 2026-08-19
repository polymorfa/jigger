#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONTACTSEARCHENTRYPOINT {
    NEWCHAT = 1,
    NEWGROUP = 2,
    NEWCALL = 3,
    ADDTOGROUP = 4,
    CHATSLISTGLOBALSEARCH = 5,
    CALLSTABGLOBALSEARCH = 6,
    EVENTINVITE = 7,
}