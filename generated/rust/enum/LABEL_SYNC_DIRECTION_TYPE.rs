#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LABELSYNCDIRECTIONTYPE {
    SENDER = 1,
    RECEIVER = 2,
    RETRY = 3,
    BOOTSTRAPSENDER = 4,
}