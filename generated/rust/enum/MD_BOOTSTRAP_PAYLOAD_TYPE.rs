#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MDBOOTSTRAPPAYLOADTYPE {
    CRITICAL = 1,
    NONCRITICAL = 2,
}