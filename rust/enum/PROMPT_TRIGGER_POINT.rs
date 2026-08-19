#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PROMPTTRIGGERPOINT {
    USERINPUT = 1,
    CONVERSATIONSTARTER = 2,
    AIHOMEQP = 3,
}