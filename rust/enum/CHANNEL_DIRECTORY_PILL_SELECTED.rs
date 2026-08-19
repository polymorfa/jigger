#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELDIRECTORYPILLSELECTED {
    RECOMMENDED = 1,
    TRENDING = 2,
    FEATURED = 3,
    NEW = 4,
    POPULAR = 5,
}