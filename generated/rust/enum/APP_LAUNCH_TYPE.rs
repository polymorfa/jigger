#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum APPLAUNCHTYPE {
    COLD = 1,
    WARM = 2,
    LUKEWARM = 3,
}