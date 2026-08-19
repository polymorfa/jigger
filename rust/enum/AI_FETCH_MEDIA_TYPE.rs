#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AIFETCHMEDIATYPE {
    IMAGESINGLE = 1,
    GRIDHIGHRES = 2,
    GRIDLOWRES = 3,
    INLINEHIGHRES = 4,
    INLINELOWRES = 5,
}