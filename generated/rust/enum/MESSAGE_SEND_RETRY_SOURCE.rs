#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGESENDRETRYSOURCE {
    AUTO = 1,
    MANUAL = 2,
}