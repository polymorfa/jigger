#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PREMIUMSTATUSTYPE {
    DISABLED = 0,
    ENABLED = 1,
    ACTIVE = 2,
}