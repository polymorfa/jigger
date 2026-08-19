#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEVICETYPE {
    PRIMARY = 1,
    COMPANION = 2,
}