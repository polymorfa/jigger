#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UIACTIONCHATTYPE {
    INDIVIDUAL = 1,
    GROUP = 2,
    SUBGROUP = 3,
    DEFAULTSUBGROUP = 4,
    CHANNEL = 5,
    METAAI = 6,
    AICHARACTERS = 7,
}