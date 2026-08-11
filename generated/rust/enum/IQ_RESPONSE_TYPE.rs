#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum IQRESPONSETYPE {
    ADDPARTICIPANT = 1,
    REMOVEPARTICIPANT = 2,
    PROMOTEPARTICIPANT = 3,
    DEMOTEPARTICIPANT = 4,
}