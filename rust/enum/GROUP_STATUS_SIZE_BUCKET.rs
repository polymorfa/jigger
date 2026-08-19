#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPSTATUSSIZEBUCKET {
    EMPTYGROUP = 1,
    XSMALL = 2,
    SMALL = 3,
    MEDIUM = 4,
    LARGE = 5,
}