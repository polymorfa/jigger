#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum FMXENTRYPOINT {
    FMXCARD = 0,
    SAFETYTOOLS = 1,
}