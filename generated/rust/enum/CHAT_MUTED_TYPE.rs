#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATMUTEDTYPE {
    NOTMUTED = 1,
    MUTEDNONOTIFICATIONS = 2,
    MUTEDSILENTNOTIFICATIONS = 3,
}