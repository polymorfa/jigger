#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPENCRYPTIONTYPE {
    E2EE = 1,
    HOSTED = 2,
}