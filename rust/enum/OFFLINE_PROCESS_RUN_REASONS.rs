#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OFFLINEPROCESSRUNREASONS {
    PUSHNOTIFICATION = 1,
    PERIODICBACKGROUNDSYNC = 2,
}