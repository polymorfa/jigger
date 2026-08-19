#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONTACTUSEXITSTATE {
    PROBLEMDESCRIPTION = 1,
    SUGGESTEDFAQ = 2,
    EMAILSEND = 3,
    INAPPFAQ = 4,
    CANCELLED = 5,
    FAQ = 6,
}