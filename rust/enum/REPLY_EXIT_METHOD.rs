#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum REPLYEXITMETHOD {
    BACKBUTTON = 1,
    SWIPEDOWN = 2,
    TAPSCREEN = 3,
    OTHER = 4,
}