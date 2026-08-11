#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum USERNAMESOURCE {
    FB = 1,
    IG = 2,
    USERINPUT = 3,
    SUGGESTEDUSERNAME = 4,
    RECOMMENDATIONLIST = 5,
}