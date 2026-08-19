#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AFTERREADSCREENENTRYPOINTTYPE {
    STORAGESETTING = 0,
    PRIVACY = 1,
    DMTIMERSCREEN = 2,
    CHATPICKERSCREEN = 3,
    CHATENTRY = 4,
    GROUPCREATION = 5,
}