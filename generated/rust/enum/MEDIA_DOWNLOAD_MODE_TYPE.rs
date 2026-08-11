#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MEDIADOWNLOADMODETYPE {
    MANUAL = 1,
    FULL = 2,
    PREFETCH = 3,
    HEADER = 4,
    THUMBNAIL = 5,
    EXPRESSPATHDOWNLOAD = 6,
    PREFETCHFORTHUMBPREVIEW = 7,
    FULLFORTHUMBPREVIEW = 8,
}