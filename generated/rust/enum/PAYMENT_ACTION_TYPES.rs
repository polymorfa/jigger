#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PAYMENTACTIONTYPES {
    VIEW = 0,
    CLICK = 1,
    ENTER = 2,
    API = 3,
    SHOWERROR = 4,
}