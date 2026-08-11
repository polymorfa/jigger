#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SURFACECODE {
    MEDIA = 1,
    LINKS = 2,
    DOCS = 3,
}