#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ABOUTREQUESTTYPE {
    CREATENEW = 1,
    UPDATEEXISTING = 2,
    CLEAREXISTING = 3,
}