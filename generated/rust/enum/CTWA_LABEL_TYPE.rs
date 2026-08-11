#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CTWALABELTYPE {
    NEWORDER = 0,
    PENDINGPAYMENT = 1,
    PAID = 2,
    ORDERCOMPLETE = 3,
    NEWCUSTOMER = 4,
    DELIVERED = 5,
    LEAD = 6,
    FOLLOWUP = 7,
    APPOINTMENT = 8,
    IMPORTANT = 9,
    DONEWORDER = 10,
    DOLEAD = 11,
    FAVORITES = 12,
}