#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LISTACTION {
    CREATE = 1,
    DELETE = 2,
    UNDELETE = 3,
    RENAME = 4,
    UPDATEMEMBERS = 5,
    MUTE = 6,
    UNMUTE = 7,
    HIDE = 8,
    UNHIDE = 9,
    REORDER = 10,
    BUCKETMIGRATIONDONE = 11,
}