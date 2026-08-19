#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ERRORTYPE {
    ERRORFETCHINGAGENTNAME = 0,
    ERRORFETCHINGCHAT = 1,
    ERROROTHER = 2,
}