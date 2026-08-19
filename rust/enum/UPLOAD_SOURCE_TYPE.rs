#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UPLOADSOURCETYPE {
    OTHER = 1,
    CAMERA = 2,
    GALLERY = 3,
    SHARE = 4,
}