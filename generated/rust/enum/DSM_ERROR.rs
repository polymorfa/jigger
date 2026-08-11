#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DSMERROR {
    INVALIDSENDER = 1,
    MISSINGDSM = 2,
    INVALIDDSM = 3,
}