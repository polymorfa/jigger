#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENUMAPPDATACALLMESSAGENOTIFICATIONRECEIPT {
    Appdata,
    Call,
    Message,
    Notification,
    Receipt,
}