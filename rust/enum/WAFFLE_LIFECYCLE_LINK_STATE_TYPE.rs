#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WAFFLELIFECYCLELINKSTATETYPE {
    NOTAPPLICABLE = 0,
    ACTIVE = 1,
    PAUSED = 2,
    UNLINKED = 3,
}