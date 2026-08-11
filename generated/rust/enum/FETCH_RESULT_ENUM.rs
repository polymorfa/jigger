#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum FETCHRESULTENUM {
    SUCCESS = 0,
    EXCEPTION = 1,
}