#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCMEDIAOPERATIONCODE {
    DOWNLOAD = 1,
    UPLOAD = 2,
}