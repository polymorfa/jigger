#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENFORCEMENTTYPE {
    CHS = 0,
    CHSI = 1,
    CHGS = 2,
    CHGSI = 3,
    CHHCH = 4,
    CHPPD = 5,
    CHHAP = 6,
}