#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PSAMESSAGEREMOVEACTION {
    BLOCK = 1,
    UNBLOCK = 2,
    ARCHIVE = 3,
    UNARCHIVE = 4,
    CLEAR = 5,
    DELETEALL = 6,
}