#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BUSYREASON {
    PSTNRINGING = 0,
    PSTNOFFHOOK = 1,
    WACALLRINGINGORPENDING = 2,
}