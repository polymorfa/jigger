#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAYMENTTRANSACTIONSTATUSTYPE {
    FAILED = 1,
    COMPLETED = 2,
    PENDING = 3,
}