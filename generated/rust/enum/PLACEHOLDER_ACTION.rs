#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PLACEHOLDERACTION {
    OTHER = 0,
    ADD = 1,
    VIEW = 2,
    POPULATE = 3,
}