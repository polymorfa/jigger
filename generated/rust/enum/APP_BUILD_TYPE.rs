#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum APPBUILDTYPE {
    DEBUG = 1,
    ALPHA = 2,
    BETA = 3,
    RELEASE = 4,
}