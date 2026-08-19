#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum THUMBNAILTYPE {
    HQ = 1,
    CUSTOM = 2,
    MEDIABASED = 3,
}