#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTEORIGIN {
    STATUSLIST = 1,
    STATUSVIEWER = 2,
    CHATSTABSTATUSTRAY = 3,
}