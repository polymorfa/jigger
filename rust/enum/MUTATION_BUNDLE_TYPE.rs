#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTATIONBUNDLETYPE {
    SNAPSHOT = 0,
    PATCH = 1,
}