#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLTRIGGER {
    ONLINESTANZA = 0,
    OFFLINESTANZA = 1,
    FCMPUSHPAYLOAD = 2,
    FBNSPUSHPAYLOAD = 3,
}