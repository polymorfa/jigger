#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LOGINHOSTTYPE {
    PUSHOVERRIDES = 1,
    GWHATSAPPNET = 2,
    PUSHFALLBACKS = 3,
    GFALLBACKWHATSAPPNET = 4,
    HARDCODEDLIST = 5,
    EXWHATSAPPNET = 6,
    PROXY = 7,
}