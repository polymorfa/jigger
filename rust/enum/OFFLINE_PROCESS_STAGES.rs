#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum OFFLINEPROCESSSTAGES {
    PAGELOAD = 1,
    SOCKETCONNECT = 2,
    OFFLINEPREVIEW = 3,
    PROCESSING = 4,
    PROCESSCOMPLETE = 5,
    PROCESSINTERRUPTED = 6,
}