#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELUSERTYPE {
    OWNER = 1,
    ADMIN = 2,
    FOLLOWER = 3,
    GUEST = 4,
}