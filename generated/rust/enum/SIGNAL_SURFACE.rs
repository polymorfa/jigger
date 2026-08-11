#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNALSURFACE {
    BIZPROFILESCREEN = 0,
    CHATTHREAD = 1,
    CHATLIST = 2,
    OTHER = 3,
}