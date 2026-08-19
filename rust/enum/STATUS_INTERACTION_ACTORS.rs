#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSINTERACTIONACTORS {
    SELFINTERACTION = 1,
    POSTERVIEWER = 2,
    OTHERTOOTHER = 3,
}