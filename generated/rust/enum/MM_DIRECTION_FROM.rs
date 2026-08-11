#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MMDIRECTIONFROM {
    CUSTOMER = 0,
    BUSINESS = 1,
}