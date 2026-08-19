#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum USERNAMESTATE {
    RESERVED = 1,
    CREATED = 2,
    ACTIVATED = 3,
}