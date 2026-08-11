#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DMCHATPICKERENTRYPOINTTYPE {
    DEFAULTMODESETTING = 0,
    STORAGESETTING = 1,
    PRIVACYSETTING = 2,
}