#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BOTBIZENTRYPOINT {
    SHAREDBOTBIZCARD = 1,
    SHAREDBOTBIZDEEPLINK = 2,
    BOTBIZCHAT = 3,
}