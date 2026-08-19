#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLTYPE {
    NONE = 0,
    VIDEO = 1,
    VOICE = 2,
}