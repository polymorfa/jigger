#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OVERALLMEDIAKEYREUSETYPE {
    NONENEWCONTENT = 1,
    NONEEXPIRED = 2,
    REUSED = 3,
    NONEWASSTATUS = 4,
}