#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBCAPPCACHESTATUSCODE {
    UNCACHED = 0,
    IDLE = 1,
    CHECKING = 2,
    DOWNLOADING = 3,
    UPDATEREADY = 4,
    OBSOLETE = 5,
}