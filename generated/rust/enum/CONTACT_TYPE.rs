#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONTACTTYPE {
    CONSUMER = 1,
    SMB = 2,
    ENTERPRISE = 3,
}