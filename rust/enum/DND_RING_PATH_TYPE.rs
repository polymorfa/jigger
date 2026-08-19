#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DNDRINGPATHTYPE {
    IMPERATIVE = 1,
    CHANNEL = 2,
    NONE = 3,
}