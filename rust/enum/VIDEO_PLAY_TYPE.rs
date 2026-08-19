#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VIDEOPLAYTYPE {
    FILE = 1,
    STREAM = 2,
    SENT = 3,
}