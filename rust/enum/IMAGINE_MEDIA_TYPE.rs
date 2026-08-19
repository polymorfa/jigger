#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum IMAGINEMEDIATYPE {
    IMAGE = 1,
    VIDEO = 2,
    DOCUMENT = 3,
    MIXED = 4,
}