#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WAADACCOUNTELIGIBILITY {
    WAONLY = 1,
    FBONLY = 2,
    FBORWA = 3,
}