#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PARTICIPANTACTIONSOURCE {
    MINICONTACTSHEETAUDIO = 1,
    MINICONTACTSHEETVIDEO = 2,
    HEADERAUDIO = 3,
    HEADERVIDEO = 4,
}