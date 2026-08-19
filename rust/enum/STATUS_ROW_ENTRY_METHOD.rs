#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSROWENTRYMETHOD {
    DIRECTROWTAP = 1,
    BACKWARDSSWIPE = 2,
    FOWARDSSWIPE = 3,
    BACKWARDSTAP = 4,
    FOWARDSTAP = 5,
    PREVIOUSROWTIMEOUT = 6,
}