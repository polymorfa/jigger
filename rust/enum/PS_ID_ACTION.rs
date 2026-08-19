#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PSIDACTION {
    CREATED = 1,
    ROTATED = 2,
    DELETED = 3,
}