#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PUSHPROVIDER {
    FCM = 0,
    FBNS = 1,
    ADM = 2,
}