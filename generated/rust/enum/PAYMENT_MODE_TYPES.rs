#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAYMENTMODETYPES {
    CONSUMER = 0,
    MERCHANT = 1,
}