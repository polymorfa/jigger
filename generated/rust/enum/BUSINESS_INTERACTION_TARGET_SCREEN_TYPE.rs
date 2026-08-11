#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BUSINESSINTERACTIONTARGETSCREENTYPE {
    INDIVIDUALCHAT = 1,
    LANDINGPAGE = 2,
    OTHER = 3,
}