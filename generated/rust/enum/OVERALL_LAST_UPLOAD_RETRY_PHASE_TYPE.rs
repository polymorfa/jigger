#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OVERALLLASTUPLOADRETRYPHASETYPE {
    RESUMECHECK = 1,
    UPLOAD = 2,
    FINALIZE = 3,
}