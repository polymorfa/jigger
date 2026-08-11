#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BIZPLATFORM {
    UNKNOWN = 1,
    SMB = 2,
    ENT = 3,
    CLOUDAPI = 4,
}