#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLLINKTYPE {
    STANDARD = 1,
    EVENT = 2,
}