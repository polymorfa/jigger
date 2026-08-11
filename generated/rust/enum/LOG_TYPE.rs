#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LOGTYPE {
    MINOREVENT = 0,
    COUNTINGSTAT = 1,
    UNCAUGHTEXCEPTION = 3,
    UNHANDLEDREJECTEDPROMISE = 4,
    INVESTIGATION = 5,
    UNCATEGORIZED = 6,
}