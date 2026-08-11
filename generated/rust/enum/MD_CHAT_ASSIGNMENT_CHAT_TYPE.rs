#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MDCHATASSIGNMENTCHATTYPE {
    GROUP = 0,
    BROADCASTLIST = 1,
    INDIVIDUAL = 2,
    COMMUNITY = 3,
    CHANNEL = 4,
    INTEROP = 5,
}