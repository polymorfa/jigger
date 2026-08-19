#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENUMACTIVEACTIVEPENDINGACTIVESTATUSPENDINGAVAILABLEAVAILABLEPENDINGAVAILABLESTATUSPENDINGBLOCKEDDEREGISTEREDDEREGISTEREDPENDINGINACTIVEINACTIVEPENDINGINACTIVESTATUSPENDINGUNKNOWN {
    Active,
    ActivePending,
    ActiveStatusPending,
    Available,
    AvailablePending,
    AvailableStatusPending,
    Blocked,
    Deregistered,
    DeregisteredPending,
    Inactive,
    InactivePending,
    InactiveStatusPending,
    Unknown,
}