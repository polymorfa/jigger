#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BLOCKEVENTACTIONTYPE {
    BLOCK = 0,
    UNBLOCK = 1,
}