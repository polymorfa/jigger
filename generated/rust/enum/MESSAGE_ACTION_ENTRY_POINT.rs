#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGEACTIONENTRYPOINT {
    CHATLIST = 0,
    URLCLICKBANNER = 1,
}