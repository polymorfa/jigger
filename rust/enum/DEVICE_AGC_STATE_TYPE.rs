#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEVICEAGCSTATETYPE {
    UNKNOWN = 0,
    UNAVAILABLE = 1,
    ENABLEFAILED = 2,
    ENABLED = 3,
}