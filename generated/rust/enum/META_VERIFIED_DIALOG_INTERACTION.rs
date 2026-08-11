#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum METAVERIFIEDDIALOGINTERACTION {
    IMPRESSION = 1,
    CONFIRM = 2,
    LEARNMORE = 3,
    CANCEL = 4,
}