#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BOTTYPE {
    UNKNOWN = 0,
    METABOT = 1,
    BOT1PBIZ = 2,
    BOT3PBIZ = 3,
    UGC = 4,
    METACHARACTER = 5,
    TEEBOT = 6,
    HATCH = 7,
    MANUS = 8,
}