#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NOTICETRIGGEREDBY {
    AUTOSTART = 0,
    BANNER = 1,
    DEEPLINK = 2,
    JUSTINTIME = 3,
}