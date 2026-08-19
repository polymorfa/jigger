#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATWALLPAPERTYPE {
    LIGHT = 1,
    DARK = 2,
    SOLID = 3,
    CUSTOM = 4,
    DEFAULT = 5,
}