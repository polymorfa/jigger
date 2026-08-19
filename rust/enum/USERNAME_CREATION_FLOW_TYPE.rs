#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum USERNAMECREATIONFLOWTYPE {
    CREATION = 1,
    RESERVATION = 2,
    ACTIVATION = 3,
    MANAGEMENT = 4,
}