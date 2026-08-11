#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEVICEARCH {
    UNKNOWN = 0,
    ARM64 = 1,
    ARMV7 = 2,
    X86 = 3,
    X8664 = 4,
}