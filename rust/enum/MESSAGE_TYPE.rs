#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGETYPE {
    INDIVIDUAL = 1,
    GROUP = 2,
    BROADCAST = 3,
    STATUS = 4,
    CHANNEL = 5,
    INTEROP = 6,
    GREETING = 7,
    MEDIAHUB = 8,
}