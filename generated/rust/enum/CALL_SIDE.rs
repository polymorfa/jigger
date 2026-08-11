#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLSIDE {
    CALLER = 1,
    CALLEE = 2,
}