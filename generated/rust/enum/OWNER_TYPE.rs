#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OWNERTYPE {
    CONSUMER = 1,
    SMB = 2,
    ENT = 3,
}