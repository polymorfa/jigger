#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSPLACEHOLDERTYPE {
    NONE = 1,
    PLACEHOLDER = 2,
    NOTVIEWABLE = 3,
    FUTUREPROOF = 4,
}