#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATACTIONTYPE {
    MUTE = 1,
    UNMUTE = 2,
    ARCHIVE = 3,
    CLEAR = 4,
    EXITGROUP = 5,
    DELETE = 6,
    PIN = 7,
    UNREAD = 8,
    READ = 9,
    SUSPENDCHATDELETE = 10,
}