#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNALORIGIN {
    CTAURLCLICK = 0,
    BODYURLCLICK = 1,
    BODYURLLONGPRESS = 2,
    CTAAPPCLICK = 3,
    PAYMENTCTACLICK = 4,
}