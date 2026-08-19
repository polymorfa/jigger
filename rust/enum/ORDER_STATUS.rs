#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ORDERSTATUS {
    PROCESSING = 0,
    SHIPPED = 1,
    COMPLETED = 2,
    CANCELLED = 3,
    PENDING = 4,
    PARTIALLYSHIPPED = 5,
    PAIDCHANGE = 6,
}