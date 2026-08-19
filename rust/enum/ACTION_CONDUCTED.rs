#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ACTIONCONDUCTED {
    MUTE = 1,
    UNMUTE = 2,
    EXPIRE = 3,
}