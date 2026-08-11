#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum READENTRYPOINT {
    CHATLIST = 1,
    CHAT = 2,
}