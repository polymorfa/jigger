#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ORDERSIGNALTYPE {
    CREATED = 0,
    UPDATED = 1,
}