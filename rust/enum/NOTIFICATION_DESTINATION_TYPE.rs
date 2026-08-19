#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NOTIFICATIONDESTINATIONTYPE {
    INDIVIDUAL = 1,
    GROUP = 2,
    OTHER = 3,
    CHANNEL = 4,
    INTEROP = 5,
    STATUS = 6,
}