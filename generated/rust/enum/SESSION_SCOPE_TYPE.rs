#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SESSIONSCOPETYPE {
    DEFAULT = 0,
    STATUS = 1,
}