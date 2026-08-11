#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONNECTIONORIGINTYPE {
    PERSON = 1,
    PUSH = 2,
    OTHER = 3,
    BACKOFF = 4,
}