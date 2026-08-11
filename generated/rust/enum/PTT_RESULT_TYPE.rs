#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PTTRESULTTYPE {
    SENT = 1,
    CANCELLED = 2,
    TOOSHORT = 3,
}