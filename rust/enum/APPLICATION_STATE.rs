#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum APPLICATIONSTATE {
    FOREGROUND = 1,
    BACKGROUND = 2,
}