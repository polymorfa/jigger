#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BUSINESSINTERACTIONINTERNALENTRYPOINT {
    STATUS = 1,
    INDIVIDUALCHAT = 2,
    GROUP = 3,
    OTHER = 4,
    OUTSIDEOFWA = 5,
    CHANNEL = 6,
}