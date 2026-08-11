#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIENCEEVENTSURFACETYPE {
    SUGGESTEDCARD = 0,
    MANUALPICK = 1,
    CSVIMPORT = 2,
    LABELSELECTION = 3,
    SYNCDINCOMING = 4,
    DUPLICATE = 5,
}