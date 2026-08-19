#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MDSYNCDFATALERRORSOURCE {
    SNAPSHOT = 1,
    EXTERNALPATCH = 2,
    INLINEPATCH = 3,
}