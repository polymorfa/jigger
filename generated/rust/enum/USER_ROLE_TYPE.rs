#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum USERROLETYPE {
    MEMBER = 0,
    ADMIN = 1,
    CADMIN = 2,
}