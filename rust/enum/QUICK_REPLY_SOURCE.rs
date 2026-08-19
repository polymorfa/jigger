#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum QUICKREPLYSOURCE {
    UNKNOWN = 0,
    UPLEVEL = 1,
    FULLSCREEN = 2,
}