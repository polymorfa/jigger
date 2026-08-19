#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MEDIAUPLOADMODETYPE {
    REGULAR = 1,
    FASTFORWARDEXISTCHECK = 2,
    VIDEOEXISTCHECK = 3,
    PRODUCT = 4,
    MEDIARETRY = 5,
    WEBREUPLOAD = 6,
    THUMBNAIL = 7,
    EXPRESSPATHUPLOAD = 8,
}