#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLSIZETYPE {
    ONETOONE = 1,
    ADHOC = 2,
    LGC = 3,
    CALLLINK = 4,
}