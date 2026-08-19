#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCMEDIALOADRESULTCODE {
    SUCCESS = 0,
    SILENCE = 1,
    ZEROWIDTH = 2,
}