#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELPRODUCERINSIGHTSACTIONTYPE {
    WIDGETIMPRESSION = 0,
    OPEN = 1,
    CLOSE = 2,
    NAVIGATIONTAP = 3,
    INFOICONTAP = 4,
    LINKCLICK = 5,
}