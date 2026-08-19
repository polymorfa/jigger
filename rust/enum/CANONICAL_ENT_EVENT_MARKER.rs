#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CANONICALENTEVENTMARKER {
    START = 0,
    SUCCESS = 1,
    ERROR = 2,
}