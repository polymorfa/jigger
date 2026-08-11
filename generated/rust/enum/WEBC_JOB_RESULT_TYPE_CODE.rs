#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCJOBRESULTTYPECODE {
    COMPLETED = 0,
    ERROR = 1,
    TIMEOUT = 2,
    ABORTED = 3,
}