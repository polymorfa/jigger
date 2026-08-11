#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum COEXSYSMSGSTATETRANSITIONATTEMPT {
    E2EETOHOSTED = 0,
    HOSTEDTOE2EE = 1,
    HOSTEDTOHOSTED = 2,
}