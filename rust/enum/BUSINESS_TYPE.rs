#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BUSINESSTYPE {
    SMB = 1,
    APIDC = 2,
    API = 3,
}