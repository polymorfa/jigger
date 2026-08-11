#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PILLENTRYPOINT {
    LINK = 0,
    PHONE = 1,
    CONTACT = 2,
}