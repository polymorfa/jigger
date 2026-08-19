#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum URLSTATUSCLICKED {
    ONECLICK = 1,
    TWOCLICKS = 2,
    NOCLICK = 3,
}