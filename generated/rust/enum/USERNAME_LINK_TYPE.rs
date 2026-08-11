#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum USERNAMELINKTYPE {
    NEW = 1,
    EXISTING = 2,
}