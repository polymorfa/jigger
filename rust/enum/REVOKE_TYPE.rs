#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum REVOKETYPE {
    SENDER = 0,
    ADMIN = 1,
}