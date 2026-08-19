#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NOTIFICATIONSETTINGTYPE {
    ALLOWED = 1,
    BLOCKED = 2,
    UNKNOWN = 3,
}