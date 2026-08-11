#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTEACTION {
    MUTE = 1,
    UNMUTE = 2,
}