#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENUMALLOWBYPASSDENYERROR {
    Allow,
    Bypass,
    Deny,
    Error,
}