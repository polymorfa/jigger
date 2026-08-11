#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SHARECONTENTUSERJOURNEYENTRYPOINT {
    CONTEXTMENU = 1,
    TOOLBAR = 2,
    FASTFORWARD = 3,
    OTHERS = 4,
}