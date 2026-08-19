#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCENVCODE {
    PROD = 0,
    INTERN = 1,
    DEV = 2,
    E2E = 3,
}