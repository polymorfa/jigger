#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGEBIZTYPE {
    NOTBIZMSG = 0,
    APIMARKETING = 1,
    APIUTILITY = 2,
    OTHERAPIBIZMSG = 3,
    SMBBIZMSG = 4,
}