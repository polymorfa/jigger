#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATASSIGNMENTCHATTYPE {
    INDIVIDUAL = 0,
    GROUP = 1,
    COMMUNITY = 2,
    CHANNEL = 3,
}