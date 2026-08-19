#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CRASHAPPLICATIONSTATE {
    FOREGROUND = 1,
    BACKGROUND = 2,
    APPINIT = 3,
    VISIBLE = 4,
}