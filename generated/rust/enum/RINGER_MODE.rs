#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RINGERMODE {
    SILENT = 0,
    VIBRATE = 1,
    NORMAL = 2,
}