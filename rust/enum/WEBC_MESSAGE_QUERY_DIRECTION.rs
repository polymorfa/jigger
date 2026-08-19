#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCMESSAGEQUERYDIRECTION {
    LOADPREV = 0,
    LOADNEXT = 1,
    LOADAROUND = 2,
}