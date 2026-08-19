#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum METAVERIFIEDUSERACTIONASSETTYPE {
    CHANNEL = 1,
    SMB = 2,
    ENT = 3,
    PERSONAL = 4,
}