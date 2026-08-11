#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CAMERAPREVIEWMODE {
    DEFAULT = 0,
    TEXTURE = 1,
    TEXTUREFALLBACK = 2,
}