#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ANDROIDCAMERA2SUPPORTLEVEL {
    LIMITED = 0,
    FULL = 1,
    LEGACY = 2,
    LEVEL3 = 3,
    EXTERNAL = 4,
}