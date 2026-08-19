#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PREFERREDLINKTYPE {
    LOCAL = 0,
    UNIVERSAL = 1,
}