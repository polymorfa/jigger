#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATTYPE {
    INDIVIDUAL = 1,
    SMB = 2,
    ENT = 3,
    INTEROP = 4,
    UNKNOWN = 5,
    BUSINESS = 6,
}