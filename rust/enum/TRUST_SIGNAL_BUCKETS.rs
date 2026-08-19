#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TRUSTSIGNALBUCKETS {
    B0 = 1,
    B1 = 2,
    B2 = 3,
    B11 = 4,
    B51 = 5,
    B101 = 6,
    B501 = 7,
    B1K = 8,
    B10K = 9,
    B100K = 10,
    B1M = 11,
}