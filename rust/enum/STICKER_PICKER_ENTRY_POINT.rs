#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STICKERPICKERENTRYPOINT {
    CHATCOMPOSER = 1,
    REACTION = 2,
}