#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SEARCHACTIONENTRYPOINTTYPE {
    CHATSLIST = 1,
    UPDATES = 2,
    CALLS = 3,
    CHATINFO = 4,
    CHATSNOCONTACTSPERMISSION = 5,
    CHATSNULLSTATE = 6,
}