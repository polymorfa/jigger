#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DISCLOSUREINTERACTION {
    CONTINUE = 0,
    CANCEL = 1,
    DISMISSED = 2,
    LEARNMORE = 3,
}