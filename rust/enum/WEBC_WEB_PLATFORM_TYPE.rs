#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCWEBPLATFORMTYPE {
    WEB = 1,
    WIN32 = 2,
    DARWIN = 3,
    IOSTABLET = 4,
    ANDROIDTABLET = 5,
    WINSTORE = 6,
    MACSTORE = 7,
    DARWINBETA = 8,
    WIN32BETA = 9,
    PWA = 10,
    WINHYBRID = 11,
}