#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEFAULTPROTOCOLRESULTTYPE {
    DISPATCHED = 0,
    CONVERSIONFAILURE = 1,
    NAVIGATIONSUCCESS = 2,
    NAVIGATIONFAILURE = 3,
}