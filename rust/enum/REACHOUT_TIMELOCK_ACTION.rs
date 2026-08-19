#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum REACHOUTTIMELOCKACTION {
    IMPRESSION = 1,
    SMBMMBBOPTIONIMPRESSION = 2,
    CLICKBUSINESSTOOLS = 3,
}