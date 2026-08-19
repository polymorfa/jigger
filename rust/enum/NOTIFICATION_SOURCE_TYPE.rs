#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NOTIFICATIONSOURCETYPE {
    PUSHTRIGGERED = 1,
    MAINAPP = 2,
    INAPP = 3,
    VOIPPUSHTRIGGERED = 4,
    MAINAPPFOREGROUND = 5,
}