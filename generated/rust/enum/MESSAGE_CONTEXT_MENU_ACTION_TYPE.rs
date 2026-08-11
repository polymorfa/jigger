#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGECONTEXTMENUACTIONTYPE {
    OPEN = 1,
    CLICK = 2,
    COMPLETE = 3,
    CANCEL = 4,
}