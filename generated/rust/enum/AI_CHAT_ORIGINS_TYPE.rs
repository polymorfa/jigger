#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AICHATORIGINSTYPE {
    UNKNOWN = 0,
    AIHOME = 1,
    AITABTEXT = 2,
    AITABVOICE = 3,
}