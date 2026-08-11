#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNUPENTRYPOINT {
    CHATTHREADBUSINESS = 0,
    CHATTHREADOTHER = 1,
    CHANNELS = 2,
    STATUS = 3,
    FACEBOOK = 4,
    INSTAGRAM = 5,
    EXTERNAL = 6,
    MESSENGER = 7,
    THREADS = 8,
}