#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATORIGINSTYPE {
    LIDUSERNAME = 1,
    LIDCTWA = 2,
    OTHERS = 3,
}