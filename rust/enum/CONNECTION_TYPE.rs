#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONNECTIONTYPE {
    HOSTNAME = 0,
    IP4 = 1,
    IP6 = 2,
}