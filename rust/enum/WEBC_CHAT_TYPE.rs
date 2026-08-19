#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCCHATTYPE {
    INDIVIDUAL = 0,
    GROUP = 1,
    BROADCASTLIST = 2,
    COMMUNITY = 3,
    NEWSLETTER = 4,
}