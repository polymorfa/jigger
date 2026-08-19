#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum QUICKREPLYORIGIN {
    UNKNOWN = 0,
    CONVERSATIONS = 1,
    BUTTON = 2,
    KEYBOARD = 3,
}