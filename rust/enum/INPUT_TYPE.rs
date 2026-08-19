#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum INPUTTYPE {
    SUGGESTION = 1,
    USERINPUT = 2,
    USERINPUTANDSUGGESTION = 3,
}