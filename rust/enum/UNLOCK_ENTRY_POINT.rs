#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UNLOCKENTRYPOINT {
    CHATLIST = 0,
    NOTIFICATION = 1,
    PRIVATEREPLY = 2,
    STATUSREPLY = 3,
    CHATINFO = 4,
    CONTACTPICKER = 5,
    LOCKCHATHELPER = 6,
    SEARCH = 7,
    UNKNOWN = 8,
    DIRECTMESSAGE = 9,
    MEDIAVIEWER = 10,
    SIDEBAR = 11,
}