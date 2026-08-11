#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPMEMBERADDINGMEMBERTYPE {
    OPENMETAAI = 0,
    TEEBOT = 1,
    WAUSER = 2,
    NONWAUSER = 3,
}