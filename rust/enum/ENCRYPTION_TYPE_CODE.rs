#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENCRYPTIONTYPECODE {
    E2EE = 1,
    COEX = 2,
    SELFCOEX = 3,
    CAPI = 4,
    BSP = 5,
    GUEST = 6,
    TEE = 7,
    BOT = 8,
    BOTGROUP = 9,
    COEXV2 = 10,
    SELFCOEXV2 = 11,
}