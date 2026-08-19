#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BACKUPNETWORKSETTING {
    WIFIONLY = 0,
    WIFIORCELLULAR = 1,
}