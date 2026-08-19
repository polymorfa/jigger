#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PREVIOUSEPHEMERALITYTYPE {
    AFTERREAD = 1,
    DISAPPEARINGMESSAGE = 2,
}