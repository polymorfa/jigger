#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum FORWARDORIGIN {
    UNKNOWN = 1,
    CHAT = 2,
    STATUS = 3,
    CHANNELS = 4,
    METAAI = 5,
}