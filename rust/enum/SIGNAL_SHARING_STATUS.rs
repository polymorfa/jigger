#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNALSHARINGSTATUS {
    ONEPD = 0,
    SP = 1,
    NOTSHARED = 2,
}