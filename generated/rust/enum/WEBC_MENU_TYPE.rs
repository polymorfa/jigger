#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCMENUTYPE {
    THREADSSCREENCLICK = 1,
    CHATSCREENCLICK = 2,
    SETTINGSSCREENCLICK = 3,
}