#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum FIELDSTATSROWTYPE {
    BOTH = 1,
    SELF = 2,
    PEER = 3,
}