#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENUMPASSPENDINGTIMELOCK {
    Pass,
    Pending,
    Timelock,
}