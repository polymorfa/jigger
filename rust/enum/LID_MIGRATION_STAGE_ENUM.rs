#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LIDMIGRATIONSTAGEENUM {
    NOTMIGRATED = 1,
    PEERMIGRATED = 2,
    HISTORYMIGRATED = 3,
}