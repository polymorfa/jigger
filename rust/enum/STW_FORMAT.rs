#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STWFORMAT {
    SINGLELINK = 0,
    SINGLEIMAGE = 1,
    SINGLETEXT = 2,
    MULTIPLELINKIMAGE = 3,
    MULTIPLELINKTEXT = 4,
    MULTIPLEIMAGETEXT = 5,
    MULTIPLELINKIMAGETEXT = 6,
}