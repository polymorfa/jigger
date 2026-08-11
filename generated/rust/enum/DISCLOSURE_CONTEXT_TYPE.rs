#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISCLOSURECONTEXTTYPE {
    PREFILLTEXT = 0,
    EMPTYPREFILLTEXT = 1,
    ICEBREAKERS = 2,
    NOTAPPLICABLE = 3,
}