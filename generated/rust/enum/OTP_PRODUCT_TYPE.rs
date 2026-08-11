#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OTPPRODUCTTYPE {
    ONETAP = 0,
    ZEROTAP = 1,
    COPYCODE = 2,
}