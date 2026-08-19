#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LOGINPORTNUMBER {
    P5222 = 1,
    P443 = 2,
    P80 = 3,
    UNKNOWN = 4,
}