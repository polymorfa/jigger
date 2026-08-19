#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCSCENARIOTYPE {
    INITIALPAIRING = 0,
    OFFLINERESUME = 1,
    IDLE = 2,
    RECENTHISTORYSYNC = 3,
    CHATNAVIGATION = 4,
}