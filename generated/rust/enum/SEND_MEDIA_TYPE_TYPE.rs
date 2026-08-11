#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SENDMEDIATYPETYPE {
    PHOTO = 1,
    VIDEO = 2,
    MIXED = 3,
}