#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum KICACTORTYPE {
    SENDER = 1,
    RECIPIENT = 2,
}