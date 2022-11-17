import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: 'q1', author: 'Jimin Wuese', text: 'To secret of winning  is starting and never stoping'
    },
    {
        id: 'q2', author: 'Jimin Wuese', text: 'Keep upgrading yourself, keep changing, for the derivative of a constant is equal to zero'
    }
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
        )
}

export default AllQuotes;