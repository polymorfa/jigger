#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EMAILSTATE {
    NOTADDED = 1,
    UNVERIFIED = 2,
    VERIFIED = 3,
    UNCONFIRMED = 4,
}