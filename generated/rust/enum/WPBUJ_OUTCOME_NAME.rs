#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WPBUJOUTCOMENAME {
    SUCCESS = 1,
    FAILED = 2,
    FAILEDNOINTERNETCONNECTION = 3,
}