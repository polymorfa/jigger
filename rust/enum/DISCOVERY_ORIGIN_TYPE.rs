#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISCOVERYORIGINTYPE {
    AITAB = 1,
    AIHOME = 2,
    AIHOMEINTAB = 3,
}