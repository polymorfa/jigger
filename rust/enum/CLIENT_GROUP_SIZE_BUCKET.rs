#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CLIENTGROUPSIZEBUCKET {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
    EXTRALARGE = 4,
    XXLARGE = 5,
    XXXLARGE = 6,
    LT1024 = 16,
    LT1500 = 7,
    LT2000 = 8,
    LT2500 = 9,
    LT3000 = 10,
    LT3500 = 11,
    LT4000 = 12,
    LT4500 = 13,
    LT5000 = 14,
    LARGESTBUCKET = 15,
}