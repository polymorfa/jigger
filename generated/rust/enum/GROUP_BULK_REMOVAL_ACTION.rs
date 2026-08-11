#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPBULKREMOVALACTION {
    TAPSYSTEMMESSAGE = 1,
    TAPREMOVEBUTTON = 2,
    TAPCONFIRMATIONBUTTON = 3,
}