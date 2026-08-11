#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AGENTENGAGEMENTENUMTYPE {
    DIRECTCHAT = 0,
    INVOKED = 1,
    MEMBER = 2,
}