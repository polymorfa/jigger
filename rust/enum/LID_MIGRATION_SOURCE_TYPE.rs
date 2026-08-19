#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LIDMIGRATIONSOURCETYPE {
    PEER = 1,
    HISTORY = 2,
}