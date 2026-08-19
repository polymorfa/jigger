#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UNREADBADGESETTINGTYPE {
    CURRENTUNREADCOUNT = 0,
    CLEARONAPPOPEN = 1,
}