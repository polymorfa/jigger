#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONTACTSPERMISSIONAUTHORIZATIONSTATUSTYPE {
    NOTDETERMINED = 1,
    RESTRICTED = 2,
    DENIED = 3,
    AUTHORIZED = 4,
    LIMITED = 5,
}