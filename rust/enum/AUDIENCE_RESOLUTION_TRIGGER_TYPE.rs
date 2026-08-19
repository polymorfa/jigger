#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIENCERESOLUTIONTRIGGERTYPE {
    USERVIEW = 0,
    PERIODICREFRESH = 1,
}