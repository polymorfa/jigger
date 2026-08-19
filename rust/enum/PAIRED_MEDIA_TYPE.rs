#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAIREDMEDIATYPE {
    SDPHOTO = 0,
    HDPHOTO = 1,
    SDVIDEO = 2,
    HDVIDEO = 3,
    MOTIONPHOTOPARENT = 4,
    MOTIONPHOTOCHILD = 5,
    HEVCVIDEOPARENT = 6,
    HEVCVIDEOCHILD = 7,
}