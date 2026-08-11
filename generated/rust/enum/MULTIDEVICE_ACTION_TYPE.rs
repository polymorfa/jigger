#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MULTIDEVICEACTIONTYPE {
    LOGIN = 0,
    LOGOUT = 1,
    CUSTOMAGENTNAME = 2,
    MESSAGEINFO = 3,
    ACTIVE = 4,
    DELETE = 5,
}