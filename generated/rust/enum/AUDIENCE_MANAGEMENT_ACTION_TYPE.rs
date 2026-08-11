#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIENCEMANAGEMENTACTIONTYPE {
    CREATED = 0,
    RESOLVED = 1,
    UPDATED = 2,
    DELETED = 3,
    SETDYNAMIC = 4,
    SETEXPLICIT = 5,
    SYNCED = 6,
}