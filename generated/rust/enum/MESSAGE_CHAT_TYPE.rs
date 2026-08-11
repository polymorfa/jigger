#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGECHATTYPE {
    OTHER = 0,
    INDIVIDUAL = 1,
    GROUP = 2,
    STATUS = 3,
    BROADCAST = 4,
    CHANNEL = 5,
}