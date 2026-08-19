#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCSTREAMMODECODE {
    QR = 0,
    MAIN = 1,
    SYNCING = 2,
    OFFLINE = 3,
    CONFLICT = 4,
    PROXYBLOCK = 5,
    TOSBLOCK = 6,
    SMBTOSBLOCK = 7,
    DEPRECATEDVERSION = 8,
    LOCK = 9,
}