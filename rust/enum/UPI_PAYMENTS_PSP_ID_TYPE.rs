#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UPIPAYMENTSPSPIDTYPE {
    ICICI = 1,
    HDFC = 2,
    AXIS = 3,
    SBI = 4,
}