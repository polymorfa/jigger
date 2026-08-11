#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STWENTRYPOINT {
    HIGHLYFORWARDEDMESSAGE = 0,
    URLLONGPRESS = 1,
    MEDIAVIEWER = 2,
    CONTEXTMENU = 3,
}