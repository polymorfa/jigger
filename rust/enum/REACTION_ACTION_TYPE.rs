#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum REACTIONACTIONTYPE {
    OPENTRAY = 1,
    DELETE = 2,
    UPDATE = 3,
}