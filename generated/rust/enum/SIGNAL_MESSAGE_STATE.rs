#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNALMESSAGESTATE {
    TRUNCATED = 0,
    EXPANDED = 1,
    ORIGINAL = 2,
}