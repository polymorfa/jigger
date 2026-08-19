#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum HARMFULFILEWARNINGSENDERRELATIONSHIP {
    NONCONTACT = 0,
    CONTACT = 1,
    SIDECONTACT = 2,
}