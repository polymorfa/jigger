#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum READSOURCE {
    OTHER = 0,
    CHAT = 1,
    NOTIFICATION = 2,
    MARKASREAD = 3,
    MULTIDEVICESYNC = 4,
}