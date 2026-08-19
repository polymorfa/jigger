#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PLATFORMNAME {
    WINDOWS = 0,
    MAC = 1,
    LINUX = 2,
    ANDROID = 3,
    CHROMEOS = 4,
    IOS = 5,
    UNKNOWN = 6,
}