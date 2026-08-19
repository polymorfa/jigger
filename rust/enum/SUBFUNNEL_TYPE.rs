#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SUBFUNNELTYPE {
    TEXT = 1,
    PTT = 2,
    REACTION = 3,
    SHARECONTENT = 4,
    EXPRESSIONTRAY = 5,
    MEDIASHARING = 6,
    QUOTEDMESSAGE = 7,
    FORWARDACTION = 8,
}