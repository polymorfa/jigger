#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PLACEHOLDERTYPE {
    OTHER = 0,
    CIPHERTEXT = 1,
    FANOUT = 2,
    DOWNGRADE = 3,
    FIXEDCONTENT = 4,
    TEMPORARY = 5,
    DROP = 6,
}